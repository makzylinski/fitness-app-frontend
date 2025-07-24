import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private navigationService: NavigationService,
    private authService: AuthService
  ) {
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  goBack(): void {
    this.navigationService.navigateToLogin();
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      console.log('Signup form data:', formData);
      this.authService
        .register(formData.email, formData.password, formData.fullName)
        .subscribe(
          () => {
            this.navigationService.navigateToLogin();
          },
          (error) => {
            console.error('Registration error:', error);
            alert(error.error.message);
            this.clearForm();
          }
        );
    } else {
      console.log('Form is invalid');
    }
  }

  private clearForm(): void {
    this.signupForm.reset();
  }

  get fullName() {
    return this.signupForm.get('fullName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
}
