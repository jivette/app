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
import { GooglePlus } from '@ionic-native/google-plus';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = (function () {
    function HeaderComponent(googlePlus, storage, navCtrl) {
        this.googlePlus = googlePlus;
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    HeaderComponent.prototype.logoutGoogle = function () {
        this.googlePlus.logout();
        this.navCtrl.push(LoginPage);
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'global-header',template:/*ion-inline-start:"/home/ivette/Documents/app/src/components/header/header.html"*/'<!-- Generated template for the HeaderComponent component -->\n<ion-header>\n  <ion-navbar>\n    \n    <ion-buttons>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>\n        Te recuenrdo\n    </ion-title>\n\n    <ion-buttons end>\n    <button ion-button icon-only (click)="logoutGoogle()">\n      <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n  </ion-header>'/*ion-inline-end:"/home/ivette/Documents/app/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [GooglePlus, Storage, NavController])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.js.map