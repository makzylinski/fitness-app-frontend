import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BarcodeScannerComponent } from "../../shared/components/barcode-scanner/barcode-scanner.component";
import { FoodService } from '../../services/food.service';
import { SelectComponent } from "../../shared/components/select/select.component";
import { NgTemplateOutlet } from '@angular/common';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'app-meal-log',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    BarcodeScannerComponent, 
    SelectComponent, 
    NgTemplateOutlet
  ],
  templateUrl: './meal-log.component.html',
  styleUrl: './meal-log.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealLogComponent {
  mealLogForm: FormGroup;
  scannerVisible: boolean = false;
  mealList: Meal[] = [{
    idx: 0,
    isListOpen: false,
    name: 'Breakfast',
    mealList: []
  },
  {
    idx: 1,
    isListOpen: false,
    name: 'Lunch',
    mealList: []
  },
  {
    idx: 2,
    isListOpen: false,
    name: 'Dinner',
    mealList: []
  },
  {
    idx: 3,
    isListOpen: false,
    name: 'Snacks',
    mealList: []
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

    this.foodService.searchProducts('coke').subscribe((data) => {
      console.log('Search Products Data:', data);
    });

    this.foodService.searchProduct2('chocolate').subscribe((data) => {
      console.log('Search Products Data (chocolate):', data);
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

  onHeaderClick = (meal: Meal): boolean => this.mealList[meal.idx].isListOpen = !this.mealList[meal.idx].isListOpen;

  onScanClick = (): boolean => this.scannerVisible = !this.scannerVisible;

  onAddMeal = (meal: Meal): void => {
    console.log(meal);
    this.mealList[meal.idx].mealList.push({name: 'test', nutritionInfo: {kcal: 100, protein: 10, fats: 30, carbs: 20}});
  };
}
