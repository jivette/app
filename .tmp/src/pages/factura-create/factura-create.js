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
import { NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { FacturaEditPage } from '../factura-edit/factura-edit';
import { BillCreateProvider } from '../../providers/bill-create/bill-create';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the FacturaCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaCreatePage = (function () {
    function FacturaCreatePage(navCtrl, navParams, alertCtrl, billCreateProvider, evts, storage, globalProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.billCreateProvider = billCreateProvider;
        this.evts = evts;
        this.storage = storage;
        this.globalProvider = globalProvider;
        this.data = {
            id: ""
        };
        this.proveedores = [];
        this.globalProvider.showLogout = false;
        this.storage.get('avatar').then(function (avatar) {
            _this.dir = JSON.parse(avatar);
        });
        this.step = 1; //The value of the first step, always 1
        this.stepCondition = false; //Set to true if you don't need condition in every step
        this.stepDefaultCondition = this.stepCondition; //Save the default condition for every step
        //You can subscribe to the Event 'step:changed' to handle the current step
        this.evts.subscribe('step:changed', function (step) {
            //Handle the current step if you need
            _this.currentStep = step[0];
            //Set the step condition to the default value
            _this.stepCondition = _this.stepDefaultCondition;
        });
        this.evts.subscribe('step:back', function () {
            //Do something if back
            console.log('Back pressed: ', _this.currentStep);
            _this.stepCondition = true;
        });
    }
    FacturaCreatePage.prototype.onFinish = function () {
        this.navCtrl.push(FacturaEditPage, {
            data: this.data
        });
        /*this.alertCtrl.create({
          message: 'Wizard Finished!!',
          title: 'Congrats!!',
          buttons: [{
            text: 'Ok'
          }]
        }).present();*/
    };
    FacturaCreatePage.prototype.toggle = function () {
        this.stepCondition = !this.stepCondition;
    };
    FacturaCreatePage.prototype.getIconStep2 = function () {
        return this.stepCondition ? 'unlock' : 'lock';
    };
    FacturaCreatePage.prototype.getIconStep3 = function () {
        return this.stepCondition ? 'happy' : 'sad';
    };
    FacturaCreatePage.prototype.getLikeIcon = function () {
        return this.stepCondition ? 'thumbs-down' : 'thumbs-up';
    };
    FacturaCreatePage.prototype.textChange = function (e) {
        if (e.target.value && e.target.value.trim() !== '') {
            this.stepCondition = true;
        }
        else {
            this.stepCondition = false;
        }
        //var k = e.keyCode;
        //alert(k);
        //return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    };
    FacturaCreatePage.prototype.selectProvider = function () {
        //  this.data.proveedor = e;
        this.stepCondition = true;
    };
    FacturaCreatePage.prototype.sendDataCeate = function () {
        this.navCtrl.push(FacturaEditPage, {
            data: this.data
        });
    };
    FacturaCreatePage.prototype.ionViewWillEnter = function () {
        this.globalProvider.showLogout = false;
    };
    FacturaCreatePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('proveedores').then(function (proveedores) {
            _this.proveedores = JSON.parse(proveedores);
            console.log(_this.proveedores);
        });
    };
    FacturaCreatePage.prototype.check = function (e) {
        var tecla = (document.all) ? e.keyCode : e.which;
        //Tecla de retroceso para borrar, siempre la permite
        if (tecla == 8) {
            return true;
        }
        // Patron de entrada, en este caso solo acepta numeros y letras
        var patron = /[A-Za-z0-9]/;
        var tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    };
    FacturaCreatePage = __decorate([
        Component({
            selector: 'page-factura-create',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/factura-create/factura-create.html"*/'\n<ion-content>\n  <global-header></global-header>\n    \n  <ion-row class="avatar-square">\n    <img src="assets/img/{{dir}}/personaje.png"/>\n\n    <ion-simple-wizard [(step)]="step" [showSteps]="false" (finish)="onFinish()" [finishIcon]="\'done-all\'" [(stepCondition)]="stepCondition">\n      <ion-wizard-step>\n        <ion-card class="card-wizard">\n          <ion-card-content>\n            <p>\n              Selecciona un proveedor\n              <ion-list>\n                <ion-item>\n                  <ion-select [(ngModel)]="data.proveedor_id" name="proveedor_id" (ionChange)="selectProvider()">\n                    <ion-option value="{{proveedor.id}}" *ngFor="let proveedor of proveedores">{{proveedor.nombre}}</ion-option>\n                  </ion-select>\n\n                </ion-item>\n              </ion-list>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-wizard-step>\n      <ion-wizard-step>\n        <ion-card class="card-wizard">\n          <ion-card-content>\n            <p>\n              Nombre de factura\n              <ion-list>\n                <ion-item style="height: 35px;">\n                  <ion-input [(ngModel)]="data.nombre" name="nombre" (keyup)="textChange($event)" type="text" placeholder=""></ion-input>\n                </ion-item>\n              </ion-list>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-wizard-step>\n\n    </ion-simple-wizard>\n\n  </ion-row>\n\n\n \n</ion-content>'/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/factura-create/factura-create.html"*/,
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            BillCreateProvider,
            Events,
            Storage,
            GlobalProvider])
    ], FacturaCreatePage);
    return FacturaCreatePage;
}());
export { FacturaCreatePage };
//# sourceMappingURL=factura-create.js.map