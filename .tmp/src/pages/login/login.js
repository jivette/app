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
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { SchedulePage } from '../schedule/schedule';
import { SignupPage } from '../signup/signup';
//import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
var LoginPage = (function () {
    function LoginPage(navCtrl, userData, 
        //private googlePlus: GooglePlus, 
        storage) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.storage = storage;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.navCtrl.push(SchedulePage);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.loginGoogle = function () {
        this.navCtrl.push(SchedulePage);
        /*    this.googlePlus.login({})
            .then((res) => {
              if (res) {
               this.navCtrl.push(SchedulePage);
              }
            })
            .catch(err => console.error(err));*/
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-user',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/login/login.html"*/'<ion-content>\n	<div class="logo">\n		<div class="logo-cont">\n			<img src="assets/img/logo.png" alt="Ionic logo">\n		</div>\n	</div>\n\n	<ion-row responsive-xs>\n		<h1>¡Bienvenido!</h1>\n		<h6>Inicia sesión para empezar</h6>\n	</ion-row>\n\n	<ion-row responsive-xs>\n		<ion-col>\n			<button ion-button (click)="loginGoogle()" color="danger" block>\n				<ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>\n 				Iniciar sesión\n			</button>\n		</ion-col>\n	</ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            UserData,
            Storage])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map