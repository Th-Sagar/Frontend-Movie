import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AuthService,
  LoginRequest,
  RegisterRequest,
} from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = new FormControl<string>('', [Validators.required, Validators.email]);
  password = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  loginForm: FormGroup;

  inlineNotification = {
    show: false,
    type: '',
    text: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  login() {
    console.log(this.loginForm.value);
    const loginRequest: LoginRequest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService.login(loginRequest).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigate(['login']);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
