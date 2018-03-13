var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { AnimationService, AnimationBuilder } from 'css-animator';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    //private animator: AnimationBuilder;
    function SettingsPage(navCtrl, navParams /*, animationService: AnimationService*/) {
        this.navCtrl = navCtrl;
        this.navParams = navParams; /*, animationService: AnimationService*/
        this.classSelector = "active";
        this.name = "";
        this.image = "ella";
        //this.animator = animationService.builder();
    }
    SettingsPage.prototype.avatar = function (avatar) {
        this.image = avatar;
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // this.animator.setType('flipInX').show(this.myElem.nativeElement);
    };
    __decorate([
        ViewChild('#message'),
        __metadata("design:type", Object)
    ], SettingsPage.prototype, "myElem", void 0);
    SettingsPage = __decorate([
        Component({
            selector: 'page-settings',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/settings/settings.html"*/'<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="avatar-square">\n    <img src="../assets/img/{{image}}/habla.gif" />\n    <div class="message-avatar" id="message">¡Hola, yo sere tu asistente!</div>\n  </ion-row>\n  <ion-grid>\n    <h2>Selecciona tu asistente</h2><br>\n    <ion-row>\n      <ion-col col-4 class="option">\n        <img src="../assets/img/ella/habla.gif" (click)="avatar(\'ella\')" alt="">\n      </ion-col>\n      <ion-col col-4 class="option">\n        <img src="../assets/img/factura/habla.gif" (click)="avatar(\'factura\')" alt="">\n      </ion-col>\n      <ion-col col-4 class="option">\n        <img src="../assets/img/el/habla.gif" (click)="avatar(\'el\')" alt="">\n      </ion-col>\n    </ion-row>\n    <button class="save">Guardar</button>\n  </ion-grid>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams /*, animationService: AnimationService*/])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.js.map