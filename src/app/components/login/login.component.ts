import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private customErrorService:CustomErrorService,
    private router:Router
  ) {}

  login() {
    if (!this.loginForm.valid) return;
    this.authService.loginService(this.loginForm.value).subscribe({
      next: (response)=>{
        if(response && typeof response === 'string'){
          this.router.navigate(['/stinger/managment']);
        }else{
          console.log('Aca debe ir una alerta');
        }
      },
      error:(error)=>this.customErrorService.listError(error)
    });
  }
}
