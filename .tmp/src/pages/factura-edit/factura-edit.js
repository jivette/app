var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the FacturaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaEditPage = (function () {
    function FacturaEditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todo = {};
    }
    FacturaEditPage.prototype.logForm = function () {
        console.log(this.todo);
    };
    FacturaEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacturaEditPage');
    };
    FacturaEditPage = __decorate([
        Component({
            selector: 'page-factura-edit',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/factura-edit/factura-edit.html"*/'\n<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="factura">\n		    <form (ngSubmit)="logForm()">\n					<img src="assets/img/claro.png" alt="">	\n	\n		      <ion-item class="item-no-factura">\n  		        <ion-label>NO:</ion-label>\n		          <ion-input class="no-factura" type="number" [(ngModel)]="todo.numero_factura" name="numero_factura"></ion-input>\n		      </ion-item>\n\n					<ion-item>\n						<ion-label>Nombre de factura:</ion-label>\n						<ion-input type="text" [(ngModel)]="todo.nombre_factura" name="nombre_factura"></ion-input>\n					</ion-item>\n\n					<ion-item>\n		        <ion-label>Fecha de emision:</ion-label>\n		          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="todo.fecha_emision" name="fecha_emision"></ion-datetime>\n		      </ion-item>\n\n		      <ion-item>\n		        <ion-label>Fecha de pago:</ion-label>\n		          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="todo.fecha_pago" name="fecha_pago"></ion-datetime>\n		      </ion-item>\n\n					<ion-item class="price">\n						<ion-label>Monto:  Q</ion-label>\n						<ion-input type="number" [(ngModel)]="todo.monto_pagar" name="monto_pagar"></ion-input>\n					</ion-item>\n\n		      <button ion-button type="submit" block>Recuerdame</button>\n		    </form>\n\n	  <ion-row class="tarjetas">\n	  </ion-row>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/factura-edit/factura-edit.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FacturaEditPage);
    return FacturaEditPage;
}());
export { FacturaEditPage };
//# sourceMappingURL=factura-edit.js.map