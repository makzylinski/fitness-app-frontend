import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NavigationService } from '../../services/navigation.service';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navigationService: NavigationService,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Login form data:', formData);
      this.authService.login(formData.email, formData.password).subscribe(
        () => {
          this.navigationService.navigateToDashboard();
        },
        (error: any) => {
          console.error('Login error:', error);
          alert(error.error.message);
          this.clearForm();
        }
      );
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  private clearForm(): void {
    this.loginForm.reset();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach((key) => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  redirectToSignUp(): void {
    this.navigationService.navigateToSignUp();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
