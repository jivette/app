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
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FacturaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaDetailPage = (function () {
    function FacturaDetailPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.data = navParams.get('factura');
        this.storage.get('proveedores').then(function (proveedores) {
            _this.proveedores = JSON.parse(proveedores);
            console.log(_this.proveedores);
        });
    }
    FacturaDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacturaDetailPage');
    };
    FacturaDetailPage = __decorate([
        Component({
            selector: 'page-factura-detail',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/factura-detail/factura-detail.html"*/'\n<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="factura">\n			<img src="../assets/img/logo.png" alt=""  class="logo">	\n\n	\n			<form>\n		      <ion-item class="item-no-factura">\n  		        <ion-label>No:</ion-label>\n		          <ion-input disabled="true" class="no-factura" type="number" [(ngModel)]="data.no_factura" name="no_factura"></ion-input>\n		      </ion-item>\n\n					<ion-item>\n						<ion-label>Nombre de factura:</ion-label>\n						<ion-input disabled="true" type="text" [(ngModel)]="data.nombre" name="nombre"></ion-input>\n					</ion-item>\n\n					<ion-list>\n						<ion-item>\n							<ion-label>Provedor</ion-label>\n									<ion-select disabled="true" [(ngModel)]="data.proveedor_id" name="proveedor_id">\n										<ion-option value="{{proveedor.id}}" *ngFor="let proveedor of proveedores">{{proveedor.nombre}}</ion-option>\n									</ion-select>\n						</ion-item>\n					</ion-list>\n\n					<ion-item>\n						<ion-label>No. Servicio:</ion-label>\n						<ion-input disabled="true" type="number" [(ngModel)]="data.no_servicio" name="no_servicio"></ion-input>\n					</ion-item>\n\n		      <ion-item>\n		        <ion-label>Fecha de pago:</ion-label>\n		          <ion-datetime disabled="true" displayFormat="MMM DD YYYY" [(ngModel)]="data.fecha_pago" name="fecha_pago"></ion-datetime>\n		      </ion-item>\n\n					<ion-list>\n						<ion-item>\n							<ion-label>Recuerdame</ion-label>\n							<ion-select [(ngModel)]="data.dias" name="dias" disabled="true">\n								<ion-option value="1">1 días antes</ion-option>\n								<ion-option value="2">2 días antes</ion-option>\n								<ion-option value="3">3 días antes</ion-option>\n								<ion-option value="4">4 días antes</ion-option>\n								<ion-option value="5">5 días antes</ion-option>\n								<ion-option value="6">6 días antes</ion-option>\n								<ion-option value="7">7 días antes</ion-option>\n								<ion-option value="8">8 días antes</ion-option>\n								<ion-option value="9">9 días antes</ion-option>\n								<ion-option value="10">10 días antes</ion-option>\n								<ion-option value="11">11 días antes</ion-option>\n								<ion-option value="12">12 días antes</ion-option>\n								<ion-option value="13">13 días antes</ion-option>\n								<ion-option value="14">14 días antes</ion-option>\n								<ion-option value="15">15 días antes</ion-option>\n								<ion-option value="16">16 días antes</ion-option>\n								<ion-option value="17">17 días antes</ion-option>\n								<ion-option value="18">18 días antes</ion-option>\n								<ion-option value="19">19 días antes</ion-option>\n								<ion-option value="20">20 días antes</ion-option>\n								<ion-option value="21">21 días antes</ion-option>\n								<ion-option value="22">22 días antes</ion-option>\n								<ion-option value="23">23 días antes</ion-option>\n								<ion-option value="24">24 días antes</ion-option>\n								<ion-option value="25">25 días antes</ion-option>\n								<ion-option value="26">26 días antes</ion-option>\n								<ion-option value="27">27 días antes</ion-option>\n								<ion-option value="28">28 días antes</ion-option>\n								<ion-option value="29">29 días antes</ion-option>\n								<ion-option value="30">30 días antes</ion-option>\n							</ion-select>\n\n							<!--ion-label>En cuantos días te recuerdo</ion-label>\n								<ion-input type="number" [(ngModel)]="data.dias" name="dias"></ion-input>\n								<ion-datetime displayFormat="DD" [(ngModel)]="data.dias" name="dias"></ion-datetime-->\n						</ion-item>\n					</ion-list>\n\n					\n					<ion-item class="price">\n						<ion-label>Monto:  Q</ion-label>\n						<ion-input type="number" [(ngModel)]="data.valor_factura" name="valor_factura" disabled="true"></ion-input>\n					</ion-item>\n\n		    </form>\n	  <ion-row class="tarjetas">\n	  </ion-row>\n  </ion-row>\n\n</ion-content>\n '/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/factura-detail/factura-detail.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Storage])
    ], FacturaDetailPage);
    return FacturaDetailPage;
}());
export { FacturaDetailPage };
//# sourceMappingURL=factura-detail.js.map