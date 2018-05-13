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
import { MenuController, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(LoginPage).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        ViewChild('slides'),
        __metadata("design:type", Slides)
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Component({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/tutorial/tutorial.html"*/'<ion-buttons end *ngIf="showSkip">\n  <button ion-button (click)="startApp()" color="primary">Skip</button>\n</ion-buttons>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/logo.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Bienvenido a <b>TeRecuerdo</b>\n      </h2>\n      <p>\n        Esta <b>aplicación te permite</b> almacenar todas tus facturas y crear notificaciones, para que puedan ser pagadas a tiempo.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/swipe.gif" style="max-width: 70%;" class="slide-image"/>\n      <h2 class="slide-title" >Podrás cancelar tus facturas</h2>\n      <p><b>Todas tus facturas </b> las encontrarás en la vista inicial de la aplicación, podras cambiarle estado cuando las canceles.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/factura/2.png" class="slide-image"/>\n      <h2 class="slide-title"></h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continuar\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            MenuController,
            Storage])
    ], TutorialPage);
    return TutorialPage;
}());
export { TutorialPage };
//# sourceMappingURL=tutorial.js.map