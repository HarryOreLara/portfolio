import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorService {
  constructor() {}
  apiError(err: any) {
    if (err.status) {
      return throwError(
        () => new Error(`HTTP Error: ${err.status} - ${err.statusText}`)
      );
    }

    if (err.error && err.error.message) {
      return throwError(() => new Error(`Backend Error: ${err.error.message}`));
    }

    return throwError(
      () => new Error('An unexpected error occurred while creating passengers.')
    );
  }

  //TODO: Manejarlo con alertas personalizadas
  listError(err: any) {
    switch (err.status) {
      case 400: // Bad Request
        console.error('Solicitud incorrecta. Verifique los datos ingresados.');
        break;
      case 401: // Unauthorized
        console.error(
          'Acceso no autorizado. Inicie sesión e intente nuevamente.'
        );
        break;
      case 500: // Internal Server Error
        console.error('Error interno del servidor. Inténtelo más tarde.');
        break;
      default:
        console.error('Error desconocido al crear el pasajero:', err);
    }
  }
}
