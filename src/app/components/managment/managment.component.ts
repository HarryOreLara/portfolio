import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';



interface Options {
  name: string,
  code: string
}

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css'],
  providers: [MessageService],
})
export class ManagmentComponent implements OnInit {
  uploadedFiles: any[] = [];
  imgUrl:any[] = [];


  lenguajes!: Options[];

  selectedLenguajes!: Options[];

  tecnologias!: Options[];

  selectedTecnologias!: Options[];

  projectForm: FormGroup = this.fb.group({
    name: ['', []],
    description: ['', []],
    createdAt: ['', []],
    imgUrl:[this.imgUrl],
    lenguajes: ['', []],
    valoraciones:['',[]],
    tecnologias: ['', []],
    imgs:[this.uploadedFiles,[]]
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}


  ngOnInit(): void {
    this.tecnologias = [
      {name: 'Angular', code: 'NY'},
      {name: 'React', code: 'RM'},
      {name: 'ASP.NET', code: 'LDN'},
      {name: 'NestJs', code: 'IST'},
      {name: 'Flutter', code: 'PRS'}
  ];

  this.lenguajes = [
    {name: 'Javascript', code: 'NY'},
    {name: 'Typescript', code: 'RM'},
    {name: 'C#', code: 'LDN'},
    {name: 'Java', code: 'IST'},
    {name: 'Dart', code: 'PRS'}
];
  }
  registrar(event: any) {
    console.log(this.projectForm.value);
  }


  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }


    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }

  onUploadImgUrl(event: any) {
    for (let file of event.files) {
      this.imgUrl.push(file);
    }
  }
}
