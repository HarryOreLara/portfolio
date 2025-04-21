import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CPROJECTS_CONSTANT } from 'src/app/core/constants/CProjects.constant';
import { IProjects } from 'src/app/core/interfaces/IProjects.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
interface size {
  label: string,
  value: string
}
@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.css'],
})
export class OneProjectComponent implements OnInit {
  project: IProjects = {} as IProjects;
  color1: string = 'cyan';

  size1: string = 'M';

  color2: string = 'pink';

  size2: string = 'L';

  color3: string = 'bluegray';

  size3: string = 'M';

  color4: string = 'blue';

  liked1: boolean = false;

  liked2: boolean = false;

  sizes: size[] = [];

  images1: string[] = [];

  selectedImageIndex1: number = 0;

  images2: string[] = [];

  selectedImageIndex2: number = 0;

  quantity1: number = 1;

  quantity2: number = 1;

  galleriaImages: string[] = [];
  constructor(private route: ActivatedRoute, private readonly alertService:AlertService) {}

  ngOnInit(): void {
    this.sizes = [
      {label: 'Small', value: 'S'},
      {label: 'Medium', value: 'M'},
      {label: 'Large', value: 'L'}
  ];



    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.project = CPROJECTS_CONSTANT.find(
        (project) => project.id === +projectId
      ) as IProjects;


      if(!this.project) {
        this.alertService.showError('Error', 'El proyecto no existe');
        console.log('El proyecto no existe');
        return;
      }

      console.log(this.project);
    });
  }
}
