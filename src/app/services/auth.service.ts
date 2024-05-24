import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { catchError, map, throwError } from 'rxjs';
import { CustomErrorService } from '../core/errors/custom_error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url_api = environment.URL_MONGO_NESTJS;

  constructor(
    private httpClient: HttpClient,
    private customErrorService: CustomErrorService
  ) {}

  registerService(data: any) {
    let direccion = this.url_api + '/api/users/register';
    return this.httpClient.post<any>(direccion, data);
  }

  loginService(data: any) {
    let direccion = this.url_api + '/api/users/login';

    return this.httpClient.post<any>(direccion, data).pipe(
      catchError((err) => this.customErrorService.apiError(err)),
      map((res) => {
        if (res && res._id) {
          return res._id;
        } else {
          return throwError(() => new Error('No existe un ID para el usuario'));
        }
      })
    );
  }
}
