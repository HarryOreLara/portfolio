import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';
import { IProjects } from 'src/app/core/interfaces/IProjects.interface';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.css'],
})
export class OneProjectComponent implements OnInit {
  project: IProjects = {} as IProjects;
  selectedImage = '';
  selectedImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.project = CPROJECTS_CONSTANT.find(
        (project) => project.id === +projectId
      ) as IProjects;


      if (!this.project) {
        this.alertService.showError('Error', 'El proyecto no existe');
        return;
      }

      this.selectedImage = this.project.imgs?.[0] ?? this.project.imgUrl;
      this.selectedImageIndex = 0;
    });
  }

  selectImage(image: string, index: number): void {
    this.selectedImage = image;
    this.selectedImageIndex = index;
  }
}
