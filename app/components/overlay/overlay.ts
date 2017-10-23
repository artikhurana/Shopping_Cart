import {Component, EventEmitter} from "@angular/core";
@Component({
    selector: 'overlay',
    moduleId: module.id,
    inputs: ['selectedProduct'],
    outputs: ['isClose'],
    templateUrl: 'overlay.html',
    styleUrls: ['overlay.css']
})
export class Overlay {
    public isClose: EventEmitter<any> = new EventEmitter();;
    public productInfo: any;
    public selectedProduct: any;


    public closeModal(i: any) {
        this.isClose.emit(i);
    }

    public onColorChange(event: any) {
        this.selectedProduct.p_selected_color.name = event.p_available_options;
    }

    public onSizeChange(event: any) {
        this.selectedProduct.p_selected_size.name;
    }
}