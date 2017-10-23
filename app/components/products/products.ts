import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'product',
    moduleId: module.id,
    inputs: ['product'],
    outputs: ['edit', 'update', 'remove'],
    templateUrl: 'products.html',
    styleUrls: ['products.css']
})

export class Products {
    public edit: EventEmitter<any> = new EventEmitter();
    public remove: EventEmitter<any> = new EventEmitter();
    public editProduct(product: any) {
        this.edit.emit(product);
    }

    public removeProduct(event: any) {
        this.remove.emit(event);
    }

    public saveLater() {
        alert('This is not implement yet');
    }
}