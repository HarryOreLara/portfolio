import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url_api = environment.URL_MONGO_NESTJS;

  constructor(private httpClient: HttpClient) {}

  registerService(data: any) {
    let direccion = this.url_api + '/api/users/register';
    return this.httpClient.post<any>(direccion, data);
  }

  loginService(data: any) {
    let direccion = this.url_api + '/api/users/login';
    console.log(data);

    return this.httpClient.post<any>(direccion, data);
  }
}
