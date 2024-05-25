import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomErrorService } from '../core/errors/custom_error.service';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url_api = environment.URL_MONGO_NESTJS;

  constructor(
    private httpClient: HttpClient,
    private customErrorService: CustomErrorService
  ) {}

  readOneProjectService(id: string) {}

  readAllProjectsService(page?: string, limit?: string) {}

  createProjectService(data: any) {
    let direccion = this.url_api + '/api/projects';

    return this.httpClient.post<any>(direccion, data).pipe(
      catchError((err) => this.customErrorService.apiError(err)),
      map((res) => {
        if (res) {
          return res;
        } else {
          return throwError(() => new Error('Error del servidor'));
        }
      })
    );
  }

  updateProject(id: string) {}

  deleteProject(id: string) {}
}
