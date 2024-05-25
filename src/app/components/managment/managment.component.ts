import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CustomErrorService } from 'src/app/core/errors/custom_error.service';
import { ProjectService } from 'src/app/services/project.service';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css'],
  providers: [MessageService],
})
export class ManagmentComponent implements OnInit {
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
    private messageService: MessageService,
    private projectService: ProjectService,
    private customErrorService: CustomErrorService
  ) {}

  ngOnInit(): void {
    this.tecnologias = ['Angular', 'React', 'ASP.NET', 'NestJs', 'Flutter'];

    this.lenguajes = ['Javascript', 'Typescript', 'C#', 'Java', 'Dart'];
  }
  registrar(event: any) {
    //if(this.projectForm.invalid) return;

    console.log(this.projectForm.value);

    this.projectService.createProjectService(this.projectForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => this.customErrorService.listError(error),
    });
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

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
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
  }
}
