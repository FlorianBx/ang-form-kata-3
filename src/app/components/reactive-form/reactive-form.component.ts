import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputCustomComponent } from '../input-custom/input-custom.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputCustomComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get emailControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPasswordControl(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
