import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomErrorService } from 'src/app/core/errors/custom_error.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private  authService: AuthService,
    private fb: FormBuilder,
    private customErrorService:CustomErrorService
  ) {}

  login() {
    //if (!this.loginForm.valid) return;
    this.authService.loginService(this.loginForm.value).subscribe({
      next: (response)=>{
        if(response && typeof response === 'string'){
          console.log("Login exitoso");
        }
      },
      error:(error)=>this.customErrorService.listError(error)
    });
  }
}
