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
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalPageEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPageEditPage = (function () {
    function ModalPageEditPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    ModalPageEditPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalPageEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPageEditPage');
    };
    ModalPageEditPage = __decorate([
        Component({
            selector: 'page-modal-page-edit',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/modal-page-edit/modal-page-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ModalPage</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/modal-page-edit/modal-page-edit.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, ViewController, NavParams])
    ], ModalPageEditPage);
    return ModalPageEditPage;
}());
export { ModalPageEditPage };
//# sourceMappingURL=modal-page-edit.js.map