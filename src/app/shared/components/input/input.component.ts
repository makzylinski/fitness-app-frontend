import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Input value...';
  @Input() id: string = 'Empty';

  value: string = '';
  disabled: boolean = false;
  ngControl?: NgControl;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  constructor(private injector: Injector) {}

  ngOnInit() {
    try {
      this.ngControl = this.injector.get(NgControl, undefined);
      if (this.ngControl) {
        this.ngControl.valueAccessor = this;
      }
    } catch (error) {
      // NgControl not available
    }
  }

  get isInvalid(): boolean {
    return !!(this.ngControl?.invalid && this.ngControl?.touched);
  }

  get errorMessage(): string {
    if (!this.ngControl?.errors || !this.ngControl?.touched) return '';

    const errors = this.ngControl.errors;
    if (errors['required']) return 'This field is required';
    if (errors['email']) return 'Please enter a valid email';
    if (errors['minlength'])
      return `Minimum length is ${errors['minlength'].requiredLength}`;

    return 'Invalid input';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
