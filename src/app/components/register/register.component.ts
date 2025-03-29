import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name = new FormControl<string>('', [Validators.required]);
  username = new FormControl<string>('', [Validators.required]);
  email = new FormControl<string>('', [Validators.required, Validators.email]);
  password = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  registerForm: FormGroup;

  inlineNotification = {
    show: false,
    type: '',
    text: '',
  };

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
    });
  }

  register() {}
}
