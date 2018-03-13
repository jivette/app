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
import { AlertController, /* App, ModalController, */ NavController } from 'ionic-angular';
import { FacturaDetailPage } from '../factura-detail/factura-detail';
import { FacturaCreatePage } from '../factura-create/factura-create';
import { FacturaEditPage } from '../factura-edit/factura-edit';
import { Storage } from '@ionic/storage';
var SchedulePage = (function () {
    function SchedulePage(navCtrl, alertController, storage) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.getfacturas = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('facturas').then(function (facturas) {
            _this.localFacturas = JSON.parse(facturas);
            _this.getfacturas = _this.localFacturas.pendientes;
        });
    };
    SchedulePage.prototype.getPendientes = function () {
        this.getfacturas = this.localFacturas.pendientes;
    };
    SchedulePage.prototype.getCanceladas = function () {
        this.getfacturas = this.localFacturas.canceladas;
    };
    SchedulePage.prototype.itemTapped = function (factura) {
        this.navCtrl.push(FacturaDetailPage, {
            factura: factura
        });
    };
    SchedulePage.prototype.createBill = function () {
        this.navCtrl.push(FacturaCreatePage);
    };
    SchedulePage.prototype.editBill = function (factura) {
        this.navCtrl.push(FacturaEditPage, {
            data: factura
        });
    };
    SchedulePage = __decorate([
        Component({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/schedule/schedule.html"*/'\n<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="avatar-square">\n    <img src="assets/img/ella/habla.gif"/>\n    <div class="message-avatar">¡Hola, este es tu dashboard!</div>\n  </ion-row>\n\n  <ion-row class="btn-factura">\n    <button ion-button icon-only color="danger" (click)="getPendientes()">  \n      Pendientes\n    </button>\n    <button ion-button icon-only (click)="getCanceladas()">  \n      Canceladas\n    </button>\n  </ion-row>\n\n  <ion-scroll scrollY="true" class="list-bill">\n    <ion-row sticky ion-item *ngFor="let factura of getfacturas" class="item-factura">\n          <img src="../assets/img/claro.png" alt="" class="logo">\n          <ion-row class="buton-event">\n          <ion-icon ios="ios-create" md="md-create" (click)="editBill(factura)" ></ion-icon>\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n        </ion-row>\n        <ion-row class="content-factura" (click)="itemTapped(factura)">\n          <ion-row>\n            <b>{{ factura.no_factura }}</b>\n          </ion-row>\n          <ion-row>\n            <b>Fecha de pago:</b> {{ factura.fecha_pago }}\n          </ion-row>\n          <ion-row class="price">\n            <b>Q{{ factura.valor_factura }}</b>\n          </ion-row>\n        </ion-row>\n    </ion-row>  \n  </ion-scroll>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="createBill()">   \n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/schedule/schedule.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            Storage])
    ], SchedulePage);
    return SchedulePage;
}());
export { SchedulePage };
//# sourceMappingURL=schedule.js.map