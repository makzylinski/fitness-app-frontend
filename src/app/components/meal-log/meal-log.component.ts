import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BarcodeScannerComponent } from "../../shared/components/barcode-scanner/barcode-scanner.component";
import { FoodService } from '../../services/food.service';

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
    private readonly foodService: FoodService,
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

  scannedProductId = (productId: string | number) => {
    console.log('Scanned Product ID:', productId);
    this.foodService.getProductByBarcode(productId.toString()).subscribe((foodData) => {
      console.log('Food Data:', foodData);
    });
  };

  onHeaderClick = (): boolean => this.isButtonClicked = !this.isButtonClicked;
}
