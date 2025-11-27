import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    private readonly foodUrl = `https://world.openfoodfacts.net/api/v2/product/`;
    private readonly foodSearchUrl = `https://world.openfoodfacts.net/cgi/search.pl?search_terms=`;

    constructor(private http: HttpClient) { }

    getProductByBarcode = (barcode: string) =>{
        const url = `${this.foodUrl}${barcode}.json`;
        return this.http.get(url, { headers: { Authorization: "Basic " + btoa("off:off") } });
    }

    //TODO: This API is not working as expected, fix it later

    searchProducts = (query: string) => {
        const url = `https://world.openfoodfacts.org/api/v2/search?categories_tags_en=chocolate&fields=product_name,brands,nutriscore_grade`;
        return this.http.get(url, { headers: { Authorization: "Basic " + btoa("off:off") } });
    }

    searchProduct2 = (query: string) => {
        const url = `https://world.openfoodfacts.org/api/v2/search?query=nutella`;
        return this.http.get(url, { headers: { Authorization: "Basic " + btoa("off:off") } });  
    }
}