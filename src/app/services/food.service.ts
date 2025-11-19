//https://world.openfoodfacts.net/api/v2/product/{barcode}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    private readonly foodUrl = `https://world.openfoodfacts.net/api/v2/product/`;

    constructor(private http: HttpClient) { }

    getProductByBarcode = (barcode: string) =>{
        const url = `${this.foodUrl}${barcode}.json`;
        return this.http.get(url);
    }
}