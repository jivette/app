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
 * Generated class for the FacturaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaDetailPage = (function () {
    function FacturaDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('factura');
    }
    FacturaDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacturaDetailPage');
    };
    FacturaDetailPage = __decorate([
        Component({
            selector: 'page-factura-detail',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/factura-detail/factura-detail.html"*/'<ion-content>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.name}}</b>\n  </h4>\n</ion-content>\n '/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/factura-detail/factura-detail.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FacturaDetailPage);
    return FacturaDetailPage;
}());
export { FacturaDetailPage };
//# sourceMappingURL=factura-detail.js.map