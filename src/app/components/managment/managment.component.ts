import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';
import { Subscription } from 'rxjs';
import { CustomErrorService } from 'src/app/core/errors/custom_error.service';
import { ProjectService } from 'src/app/services/project.service';
import { AlertService } from 'src/app/shared/services/alert.service';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css'],
})
export class ManagmentComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  isLoading: boolean = false;
  uploadedFiles: any[] = [];
  imgUrl: any[] = [];

  lenguajes!: string[];

  selectedLenguajes!: Options[];

  tecnologias!: string[];

  selectedTecnologias!: Options[];

  projectForm: FormGroup = this.fb.group({
    name: ['', []],
    description: ['', []],
    createdAt: ['', []],
    imgUrl: [this.imgUrl, []],
    lenguajes: ['', []],
    valoraciones: ['', []],
    tecnologias: ['', []],
    imgs: [this.uploadedFiles, []],
  });



  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private projectService: ProjectService,
    private customErrorService: CustomErrorService
  ) {}

  ngOnInit(): void {
    this.tecnologias = ['Angular', 'React', 'ASP.NET', 'NestJs', 'Flutter'];

    this.lenguajes = ['Javascript', 'Typescript', 'C#', 'Java', 'Dart'];

  }

  registrar() {


    if (this.projectForm.invalid) return;

    console.log(this.projectForm.value);
    this.subscription.add(
      this.projectService
        .createProjectService(this.projectForm.value)
        .subscribe({
          next: (res) => {
            this.isLoading = true;
            this.alertService.showSuccess('Exito', 'Proyecto registrado correctamente');
          },
          error: (error) =>{
            this.alertService.showError('Error', 'Ups.. Algo Paso');
          },
          complete:()=>{
            this.isLoading = false;
          }
        })
    );
  }



  onUpload(event: any) {
    let numero = 0;

    for (let file of event.files) {
      numero++;

      let dataImg = {
        objectURL: file.objectURL,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.name,
        size: file.size,
        type: file.type,
        webkitRelativePath: file.webkitRelativePath,
        length: file.length,
      };

      const total = { ...dataImg, length: numero };

      this.uploadedFiles.push(total);
    }

    this.alertService.showSuccess('Exito', 'Archivo cargado');
  }

  onUploadImgUrl(event: any) {
    let numero = 0;

    for (let file of event.files) {
      numero++;

      let dataImg = {
        objectURL: file.objectURL,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.name,
        size: file.size,
        type: file.type,
        webkitRelativePath: file.webkitRelativePath,
      };

      const total = { ...dataImg, length: numero };

      this.imgUrl.push(total);
    }
    this.alertService.showSuccess('Exito', 'Archivo cargado');

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
