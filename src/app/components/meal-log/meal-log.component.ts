import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-meal-log',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './meal-log.component.html',
  styleUrl: './meal-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealLogComponent {
  mealLogForm: FormGroup;
  mealList = [{
    name: 'Breakfast',
  },
  {
    name: 'Lunch',
  },
  {
    name: 'Dinner',
  },
  {
    name: 'Snacks',
  }];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.mealLogForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onHeaderClick = (): void => console.log('Header clicked');
}
