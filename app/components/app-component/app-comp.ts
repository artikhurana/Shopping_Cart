import {Component, OnInit} from "@angular/core";
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app-comp',
    moduleId: module.id,
    templateUrl: 'app-comp.html',
    styleUrls: ['app-comp.css']
})

export class AppComponent {
    public productsURL = './cart.json';
    public products: Array<any> = [];
    public selectedProducts: Array<any> = [];
    public selected: boolean;
    public isOpen: boolean = false;
    private _http: Http;

    constructor(http: Http) {
        this._http = http
    }

    public ngAfterViewInit() {
        this.getProducts().subscribe((products) => {
            //console.log(products);
            this.products = products;
        })
    }

    public getProducts(): Observable<any> {
        return this._http.get(this.productsURL).map((res: Response) => {
            //console.log("Response", res);
            return res.json().productsInCart;
        });
    }

    public removeProduct(item: any) {
        let index = this.products.indexOf(item);

        this.products.splice(index, 1);
    }

    public closeModal(event: any) {
        this.isOpen = false;
    }

    public saveLater() {
        alert('This is not implement yet');
    }

    public editProduct(item: any) {
        this.selectedProducts = item;
        this.isOpen = true;
    }

    public getSum(): any {
        let sum = 0;

        for (let i of this.products) {
            sum += i.p_originalprice *i.p_quantity;
        }

        return sum;
    }
}
