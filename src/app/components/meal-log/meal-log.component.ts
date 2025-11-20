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

  product: {
    code: string;
    name: string;
    brand: string;
    quantity: string;
    categories: string;
    ingredients: string;
    salt100g: number | null;
    nutriScore: string | number | '';
    novaGroup: number | string | '';
  } | null = null;

  constructor(
    private readonly foodService: FoodService,
    private formBuilder: FormBuilder
  ) {
    this.mealLogForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  scannedProductId = (productId: string | number) => {
    console.log('Scanned Product ID:', productId);
    this.foodService.getProductByBarcode(productId.toString()).subscribe((foodData: any) => {
      const p = foodData?.product ?? {};
      const nutriments = p?.nutriments ?? {};
      const nutrimentsEstimated = p?.nutriments_estimated ?? {};

      this.product = {
        code: foodData?.code ?? p?.code ?? '',
        name: p?.product_name_en ?? p?.product_name_pl ?? p?.product_name ?? '',
        brand: p?.brands ?? '',
        quantity: p?.quantity ?? '',
        categories: (p?.categories as string) ?? (Array.isArray(p?.categories_tags) ? p.categories_tags.join(', ') : ''),
        ingredients: p?.ingredients_text_en ?? p?.ingredients_text_pl ?? p?.ingredients_text ?? '',
        salt100g: (nutriments?.salt_100g ?? nutrimentsEstimated?.salt_100g ?? null),
        nutriScore: p?.nutriscore_grade ?? p?.nutriscore_score ?? '',
        novaGroup: p?.nova_group ?? ''
      };

      console.log('Food Data (mapped):', this.product);
    });
  };

  onHeaderClick = (): boolean => this.isButtonClicked = !this.isButtonClicked;
}
