//https://world.openfoodfacts.net/api/v2/product/3274080005003.json
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    private readonly foodUrl = `https://world.openfoodfacts.net/api/v2/`;

    constructor(private http: HttpClient) { }

}
