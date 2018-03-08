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
 * Generated class for the FacturaCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaCreatePage = (function () {
    function FacturaCreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FacturaCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacturaCreatePage');
    };
    FacturaCreatePage = __decorate([
        Component({
            selector: 'page-factura-create',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/factura-create/factura-create.html"*/'\n<ion-content>\n  <global-header></global-header>\n    \n  <ion-row class="avatar-square">\n    <img src="assets/img/personaje.png"/>\n  </ion-row>\n\n \n</ion-content>'/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/factura-create/factura-create.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FacturaCreatePage);
    return FacturaCreatePage;
}());
export { FacturaCreatePage };
//# sourceMappingURL=factura-create.js.map