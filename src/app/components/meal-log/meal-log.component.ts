import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BarcodeScannerComponent } from "../../shared/components/barcode-scanner/barcode-scanner.component";

@Component({
  selector: 'app-meal-log',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, BarcodeScannerComponent],
  templateUrl: './meal-log.component.html',
  styleUrl: './meal-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealLogComponent {
  mealLogForm: FormGroup;
  isButtonClicked: boolean = false;
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

    fetch("https://world.openfoodfacts.net/api/v2/product/3274080005003.json", {
      method: "GET",
      headers: { Authorization: "Basic " + btoa("off:off") },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  onHeaderClick = (): boolean => this.isButtonClicked = !this.isButtonClicked;
}
