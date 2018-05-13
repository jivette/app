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
import { NavController, AlertController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { GetUserProvider } from '../../providers/get-user/get-user';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
var LoginPage = (function () {
    function LoginPage(navCtrl, googlePlus, getUserProvider, alertCtrl, storage, spinnerDialog) {
        this.navCtrl = navCtrl;
        this.googlePlus = googlePlus;
        this.getUserProvider = getUserProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.spinnerDialog = spinnerDialog;
    }
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            if (res) {
                _this.user = {
                    token: res.userId,
                    nombre: res.displayName,
                    correo: res.email,
                    session: "true"
                };
                var userStorage = JSON.stringify(_this.user);
                _this.storage.set('user', userStorage);
                _this.spinnerDialog.show();
                _this.getUserProvider.getUser(_this.user)
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.code == 200) {
                        var token = JSON.stringify(_this.user.token);
                        _this.storage.set('token', token);
                        if (data.avatar == 0) {
                            _this.avatar = JSON.stringify("el");
                        }
                        else if (data.avatar == 1) {
                            _this.avatar = JSON.stringify("ella");
                        }
                        else {
                            _this.avatar = JSON.stringify("factura");
                        }
                        _this.storage.set('avatar', _this.avatar);
                        var val = JSON.stringify(data.facturas);
                        _this.storage.set('facturas', val);
                        var proveedores = JSON.stringify(data.proveedores);
                        _this.storage.set('proveedores', proveedores);
                        _this.spinner = false;
                        _this.spinnerDialog.hide();
                        _this.navCtrl.push(SchedulePage);
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Ha ocurrido un error!',
                            subTitle: 'Verifica tu conexión',
                            buttons: ['Aceptar']
                        });
                        alert_1.present();
                    }
                }, function (error) {
                    console.error(error);
                });
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-user',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/login/login.html"*/'<ion-content>\n	<div class="logo">\n		<div class="logo-cont">\n			<img src="assets/img/logo.png" alt="Ionic logo">\n		</div>\n	</div>\n\n	<ion-row responsive-xs>\n		<h1>¡Bienvenido!</h1>\n		<h6>Inicia sesión para empezar</h6>\n	</ion-row>\n\n	<ion-row responsive-xs>\n		<ion-col>\n			<button ion-button (click)="loginGoogle()" color="danger" block>\n				<ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>\n 				Iniciar sesión\n			</button>\n		</ion-col>\n	</ion-row>\n</ion-content>\n\n'/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            GooglePlus,
            GetUserProvider,
            AlertController,
            Storage,
            SpinnerDialog])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map