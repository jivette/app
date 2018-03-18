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
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { GetUserProvider } from '../../providers/get-user/get-user';
import { Storage } from '@ionic/storage';
import { SchedulePage } from '../schedule/schedule';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, storage, toastCtrl, getUserProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.getUserProvider = getUserProvider;
        this.classSelector = "active";
        this.name = "";
        //this.image = "ella";
        //this.animator = animationService.builder();
        this.storage.get('token').then(function (token) {
            _this.tokenCode = JSON.parse(token);
        });
        this.storage.get('avatar').then(function (avatar) {
            _this.image = JSON.parse(avatar);
            console.log(_this.image);
        });
    }
    SettingsPage.prototype.avatar = function (avatar) {
        this.image = avatar;
        if (avatar == "ella") {
            this.icon = 1;
        }
        else if (avatar == "el") {
            this.icon = 0;
        }
        else {
            this.icon = 2;
        }
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // this.animator.setType('flipInX').show(this.myElem.nativeElement);
    };
    SettingsPage.prototype.saveAvatar = function () {
        var _this = this;
        this.settings = {
            token: this.tokenCode,
            avatar: this.icon
        };
        this.getUserProvider.getSetting(this.settings)
            .subscribe(function (data) {
            console.log(data);
            if (data.code == 200) {
                if (_this.icon == 1) {
                    var avatar = JSON.stringify("ella");
                    _this.storage.set('avatar', avatar);
                }
                else if (_this.icon == 0) {
                    var avatar = JSON.stringify("el");
                    _this.storage.set('avatar', avatar);
                }
                else {
                    var avatar = JSON.stringify("factura");
                    _this.storage.set('avatar', avatar);
                }
                var toast = _this.toastCtrl.create({
                    message: 'Has cambiado tu avatar',
                    duration: 3000,
                    position: 'top'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
                _this.navCtrl.push(SchedulePage);
            }
            else {
                alert("error!");
            }
        }, function (error) {
            console.error(error);
        });
    };
    __decorate([
        ViewChild('#message'),
        __metadata("design:type", Object)
    ], SettingsPage.prototype, "myElem", void 0);
    SettingsPage = __decorate([
        Component({
            selector: 'page-settings',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/settings/settings.html"*/'<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="avatar-square">\n    <img src="../assets/img/{{image}}/habla.gif" />\n    <div class="message-avatar" id="message">¡Hola, yo sere tu asistente!</div>\n  </ion-row>\n  <ion-grid>\n    <h2>Selecciona tu asistente</h2><br>\n    <ion-row>\n      <ion-col col-4 class="option" \n       (click)="activeButton = \'a\'" [ngClass]="{ \'active\': activeButton === \'a\' }" >\n        <img src="../assets/img/ella/habla.gif" (click)="avatar(\'ella\')" alt="">\n      </ion-col>\n      <ion-col col-4 class="option"\n       (click)="activeButton = \'b\'" [ngClass]="{ \'active\': activeButton === \'b\' }">\n        <img src="../assets/img/factura/habla.gif" (click)="avatar(\'factura\')" alt="">\n      </ion-col>\n      <ion-col col-4 class="option" \n       (click)="activeButton = \'c\'" [ngClass]="{ \'active\': activeButton === \'c\' }">\n        <img src="../assets/img/el/habla.gif" (click)="avatar(\'el\')" alt="">\n      </ion-col>\n    </ion-row>\n    <button class="save" (click)="saveAvatar()">Guardar</button>\n  </ion-grid>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Storage,
            ToastController,
            GetUserProvider])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.js.map