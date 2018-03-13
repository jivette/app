webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_get_user_get_user__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { GooglePlus } from '@ionic-native/google-plus';


var LoginPage = (function () {
    function LoginPage(navCtrl, userData, 
        //private googlePlus: GooglePlus, 
        getUserProvider, storage) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.getUserProvider = getUserProvider;
        this.storage = storage;
        this.login = { username: '', password: '' };
        this.submitted = false;
        this.users = [];
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        var user = {
            token: "56156165",
            nombre: "Ivette",
            correo: "correo@gmail.com"
        };
        this.getUserProvider.getUser(user)
            .subscribe(function (data) {
            if (data.code == 200) {
                _this.storage.set('user', user);
                var val = JSON.stringify(data.facturas);
                _this.storage.set('facturas', val);
                //this.users = data;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */]);
            }
            else {
                alert("error!");
            }
        }, function (error) {
            console.error(error);
        });
        /*    this.googlePlus.login({})
            .then((res) => {
              if (res) {
               this.navCtrl.push(SchedulePage);
              }
            })
            .catch(err => console.error(err));*/
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/login/login.html"*/'<ion-content>\n	<div class="logo">\n		<div class="logo-cont">\n			<img src="assets/img/logo.png" alt="Ionic logo">\n		</div>\n	</div>\n\n	<ion-row responsive-xs>\n		<h1>¡Bienvenido!</h1>\n		<h6>Inicia sesión para empezar</h6>\n	</ion-row>\n\n	<ion-row responsive-xs>\n		<ion-col>\n			<button ion-button (click)="loginGoogle()" color="danger" block>\n				<ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>\n 				Iniciar sesión\n			</button>\n		</ion-col>\n	</ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_6__providers_get_user_get_user__["a" /* GetUserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bill_create_bill_create__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_page_edit_modal_page_edit__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FacturaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaEditPage = (function () {
    function FacturaEditPage(navCtrl, navParams, billCreateProvider, modalCtrl, modalPageEditPage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billCreateProvider = billCreateProvider;
        this.modalCtrl = modalCtrl;
        this.modalPageEditPage = modalPageEditPage;
        //selectedItem: any;
        this.data = {};
        this.data = navParams.get('data');
        console.log(this.data);
    }
    FacturaEditPage.prototype.logForm = function () {
        console.log(this.data);
    };
    FacturaEditPage.prototype.ionViewDidLoad = function () {
        var modalPage = this.modalCtrl.create('this.modalPageEditPage');
        modalPage.present();
    };
    FacturaEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-factura-edit',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/factura-edit/factura-edit.html"*/'\n<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="factura">\n			<img src="../assets/img/claro.png" alt=""  class="logo">	\n\n	\n			<form (ngSubmit)="logForm()">\n	\n		      <ion-item class="item-no-factura">\n  		        <ion-label>NO:</ion-label>\n		          <ion-input class="no-factura" type="number" [(ngModel)]="data.no_factura" name="no_factura"></ion-input>\n		      </ion-item>\n\n					<ion-item>\n						<ion-label>Nombre de factura:</ion-label>\n						<ion-input type="text" [(ngModel)]="data.nombre_factura" name="nombre_factura"></ion-input>\n					</ion-item>\n\n					<ion-list>\n						<ion-item>\n							<ion-label>Provedor</ion-label>\n							<ion-select [(ngModel)]="data.proveedor_id" name="proveedor_id">\n						<ion-option value="1">CLaro</ion-option>\n						<ion-option value="2">Tigo</ion-option>\n							</ion-select>\n						</ion-item>\n					</ion-list>\n\n					<ion-item>\n						<ion-label>NO Servicio:</ion-label>\n						<ion-input type="number" [(ngModel)]="data.no_servicio" name="no_servicio"></ion-input>\n					</ion-item>\n\n		      <ion-item>\n		        <ion-label>Fecha de pago:</ion-label>\n		          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="data.fecha_pago" name="fecha_pago"></ion-datetime>\n		      </ion-item>\n\n					<ion-list>\n						<ion-item>\n							<ion-label>Recuerdame en</ion-label>\n							<ion-select>\n								<ion-option value="nes">una semana antes</ion-option>\n								<ion-option value="n64">1 dia antes</ion-option>\n								<ion-option value="snes">1 hora antes</ion-option>\n							</ion-select>\n						</ion-item>\n					</ion-list>\n\n					\n					<ion-item class="price">\n						<ion-label>Monto:  Q</ion-label>\n						<ion-input type="number" [(ngModel)]="data.valor_factura" name="valor_factura"></ion-input>\n					</ion-item>\n\n\n\n		      <button ion-button type="submit" block>Recuerdame</button>\n		    </form>\n	  <ion-row class="tarjetas">\n	  </ion-row>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/factura-edit/factura-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bill_create_bill_create__["a" /* BillCreateProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__modal_page_edit_modal_page_edit__["a" /* ModalPageEditPage */]])
    ], FacturaEditPage);
    return FacturaEditPage;
}());

//# sourceMappingURL=factura-edit.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-factura-detail',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/factura-detail/factura-detail.html"*/'<ion-content>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.name}}</b>\n  </h4>\n</ion-content>\n '/*ion-inline-end:"/home/ivette/Documents/app/src/pages/factura-detail/factura-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FacturaDetailPage);
    return FacturaDetailPage;
}());

//# sourceMappingURL=factura-detail.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__factura_edit_factura_edit__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FacturaCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaCreatePage = (function () {
    function FacturaCreatePage(navCtrl, navParams, alertCtrl, evts) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.evts = evts;
        this.data = {
            proveedor: '',
        };
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__factura_edit_factura_edit__["a" /* FacturaEditPage */], {
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
    };
    FacturaCreatePage.prototype.selectProvider = function () {
        //  this.data.proveedor = e;
        this.stepCondition = true;
    };
    FacturaCreatePage.prototype.sendDataCeate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__factura_edit_factura_edit__["a" /* FacturaEditPage */], {
            data: this.data
        });
    };
    FacturaCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacturaCreatePage');
    };
    FacturaCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-factura-create',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/factura-create/factura-create.html"*/'\n<ion-content>\n  <global-header></global-header>\n    \n  <ion-row class="avatar-square">\n    <img src="assets/img/ella/personaje.png"/>\n\n    <ion-simple-wizard [(step)]="step" [showSteps]="false" (finish)="onFinish()" [finishIcon]="\'done-all\'" [(stepCondition)]="stepCondition">\n      <ion-wizard-step>\n        <ion-card class="card-wizard">\n          <ion-card-content>\n            <p>\n              Selecciona un proveedor\n              <ion-list>\n                <ion-item>\n                  <ion-select [(ngModel)]="data.proveedor_id" name="proveedor_id" (ionChange)="selectProvider()">\n                    <ion-option value="1">CLaro</ion-option>\n                    <ion-option value="2">Tigo</ion-option>\n                  </ion-select>\n\n                </ion-item>\n              </ion-list>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-wizard-step>\n      <ion-wizard-step>\n        <ion-card class="card-wizard">\n          <ion-card-content>\n            <p>\n              Nombre de factura\n              <ion-list>\n                <ion-item>\n                  <ion-input [(ngModel)]="data.nombre_factura" name="nombre_factura" (input)="textChange($event)" type="text" placeholder="Edit to continue"></ion-input>\n                </ion-item>\n              </ion-list>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-wizard-step>\n\n    </ion-simple-wizard>\n\n  </ion-row>\n\n\n \n</ion-content>'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/factura-create/factura-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], FacturaCreatePage);
    return FacturaCreatePage;
}());

//# sourceMappingURL=factura-create.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillCreateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the BillCreateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BillCreateProvider = (function () {
    function BillCreateProvider(http) {
        this.http = http;
    }
    BillCreateProvider.prototype.createBill = function (data) {
        return this.http.post("api/recuerdame/api/create_factura", data);
    };
    BillCreateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BillCreateProvider);
    return BillCreateProvider;
}());

//# sourceMappingURL=bill-create.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPageEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-page-edit',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/modal-page-edit/modal-page-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ModalPage</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/modal-page-edit/modal-page-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ModalPageEditPage);
    return ModalPageEditPage;
}());

//# sourceMappingURL=modal-page-edit.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/img/ionic-logo-white.svg" alt="ionic logo">\n  </div>\n  <div padding class="about-info">\n    <h4>Ionic Conference</h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>Location</ion-label>\n        <ion-select>\n          <ion-option value="madison" selected>Madison, WI</ion-option>\n          <ion-option value="austin">Austin, TX</ion-option>\n          <ion-option value="chicago">Chicago, IL</ion-option>\n          <ion-option value="seattle">Seattle, WA</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      The Ionic Conference is a one-day conference featuring talks from the\n      Ionic team. It is focused on Ionic applications being built with\n      Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2,\n      Angular concepts, Webpack, Sass, and many other technologies used\n      in Ionic 2. Tickets are completely sold out, and we’re expecting\n      more than 1000 developers – making this the largest Ionic\n      conference ever!\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GetUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GetUserProvider = (function () {
    function GetUserProvider(http) {
        this.http = http;
    }
    GetUserProvider.prototype.getUser = function (data) {
        return this.http.post("api/recuerdame/api/obtenerUsuario", data);
    };
    GetUserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GetUserProvider);
    return GetUserProvider;
}());

//# sourceMappingURL=get-user.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */]).then(function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>ICA</b>\n      </h2>\n      <p>\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n      <h2 class="slide-title" >What is Ionic?</h2>\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n      <h2 class="slide-title">What is Ionic Pro?</h2>\n      <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('#message'),
        __metadata("design:type", Object)
    ], SettingsPage.prototype, "myElem", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/settings/settings.html"*/'<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="avatar-square">\n    <img src="../assets/img/{{image}}/habla.gif" />\n    <div class="message-avatar" id="message">¡Hola, yo sere tu asistente!</div>\n  </ion-row>\n  <ion-grid>\n    <h2>Selecciona tu asistente</h2><br>\n    <ion-row>\n      <ion-col col-4 class="option">\n        <img src="../assets/img/ella/habla.gif" (click)="avatar(\'ella\')" alt="">\n      </ion-col>\n      <ion-col col-4 class="option">\n        <img src="../assets/img/factura/habla.gif" (click)="avatar(\'factura\')" alt="">\n      </ion-col>\n      <ion-col col-4 class="option">\n        <img src="../assets/img/el/habla.gif" (click)="avatar(\'el\')" alt="">\n      </ion-col>\n    </ion-row>\n    <button class="save">Guardar</button>\n  </ion-grid>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] /*, animationService: AnimationService*/])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonSimpleWizard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ion_simple_wizard_animations__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { Keyboard } from '@ionic-native/keyboard';*/


var IonSimpleWizard = (function () {
    function IonSimpleWizard(evts) {
        this.evts = evts;
        this.finishIcon = 'send'; //Default
        this.showSteps = true; //Default
        this.step = 1; //Default
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stepChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.steps = 0; //Innitial
        this.hideWizard = false; //Default
        this.stepCondition = true; //Default
    }
    IonSimpleWizard.prototype.ngOnInit = function () {
        /**
         * Hide the wizard buttons when the keyboard is open
         */
        /*this.keyboard.onKeyboardShow().subscribe(() => {
          this.hideWizard = true;
        });
        this.keyboard.onKeyboardHide().subscribe(() => {
          this.hideWizard = false;
        })*/
    };
    /**
     * @return {number} New Steps
     */
    IonSimpleWizard.prototype.addStep = function () {
        var newSteps = this.steps + 1;
        this.steps = newSteps;
        return newSteps;
    };
    /**
     * @return {boolean} true if is the final step
     */
    IonSimpleWizard.prototype.isOnFinalStep = function () {
        return this.step === this.steps;
    };
    /**
     * @return {boolean} the current step condition
     */
    IonSimpleWizard.prototype.getCondition = function () {
        return this.stepCondition;
    };
    /**
     * @return {boolean} true if the the step is the first
     */
    IonSimpleWizard.prototype.isOnFirstStep = function () {
        return this.step === 1;
    };
    /**
     * @method back button event and emit Event Called 'step:back'
     */
    IonSimpleWizard.prototype.back = function () {
        this.stepChange.emit(this.step - 1);
        this.evts.publish('step:back');
    };
    /**
     * @method next button event and emit  Event Called 'step:next'
     */
    IonSimpleWizard.prototype.next = function () {
        this.stepChange.emit(this.step + 1);
        this.evts.publish('step:next');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "finishIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IonSimpleWizard.prototype, "showSteps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "finish", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "stepChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "stepCondition", void 0);
    IonSimpleWizard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-simple-wizard',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/ion-simple-wizard/ion-simple-wizard.component.html"*/'<ng-content></ng-content>\n<ion-footer [hidden]="hideWizard">\n  <div class="ion-wizard-footer">\n    <!--Back Button-->\n    <ion-fab [@btnState] *ngIf="!isOnFirstStep()" left bottom>\n      <button ion-fab (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-fab>\n    <!--Steps count-->   \n    <ion-badge *ngIf="showSteps">{{step}} / {{steps}}</ion-badge>\n    <!--Next Button-->\n    <ion-fab [@btnState] *ngIf="(!isOnFinalStep() && getCondition())" right bottom>\n      <button  (click)="next()">\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </ion-fab>\n    <!--Finish Button-->\n    <ion-fab [@btnState] *ngIf="(isOnFinalStep() && getCondition())" right bottom>\n      <button ion-fab (click)="finish.emit(step + 1)">\n        <ion-icon [name]="finishIcon"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n</ion-footer>'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/ion-simple-wizard/ion-simple-wizard.component.html"*/,
            animations: __WEBPACK_IMPORTED_MODULE_2__ion_simple_wizard_animations__["a" /* WizardAnimations */].btnRotate
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], IonSimpleWizard);
    return IonSimpleWizard;
}());

//# sourceMappingURL=ion-simple-wizard.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardAnimations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var WizardAnimations = (function () {
    function WizardAnimations() {
    }
    //Buttons Animations
    WizardAnimations.btnZoom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'scale(0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'scale(1)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'scale(0)' }))
            ])
        ])
    ];
    WizardAnimations.btn_none = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'relative', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ display: 'none', position: 'relative', top: 0 }))
        ])
    ];
    WizardAnimations.btnflipY = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(100px)', opacity: '1', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms 400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(100px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    WizardAnimations.btnRotate = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(400, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1 })
                ]))
            ])
        ])
    ];
    //Steps Animations
    WizardAnimations.carruselRight = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible', opacity: 0, transform: 'translateX(-100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateX(100%)' }))
            ])
        ])
    ];
    WizardAnimations.zoom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible', opacity: 0, transform: 'scale(0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'scale(1)', top: 0 }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'scale(0)', top: 0 }))
            ])
        ])
    ];
    WizardAnimations.none = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'relative', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ display: 'none', position: 'relative', top: 0 }))
        ])
    ];
    WizardAnimations.carruselLeft = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible', opacity: 0, transform: 'translateX(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateX(-100%)' }))
            ])
        ])
    ];
    WizardAnimations.carruselBottom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible', opacity: 0, transform: 'translateY(-100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateY(100%)' }))
            ])
        ])
    ];
    WizardAnimations.carruselTop = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible', opacity: 0, transform: 'translateY(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateY(-100%)' }))
            ])
        ])
    ];
    WizardAnimations.flipY = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '0.5', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px)', opacity: '1', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '0.5', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    WizardAnimations.flipX = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '0.5', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px)', opacity: '1', offset: 1 })
                ]))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '0.5', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    return WizardAnimations;
}());

//# sourceMappingURL=ion-simple-wizard-animations.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tutorial_tutorial__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_factura_detail_factura_detail__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_factura_create_factura_create__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_factura_edit_factura_edit__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_conference_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_plus__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_bill_service_bill_service__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_css_animator__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_ion_simple_wizard_ion_simple_wizard_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_ion_simple_wizard_ion_simple_wizard_step_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_get_user_get_user__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_bill_create_bill_create__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_modal_page_edit_modal_page_edit__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { PopoverPage } from '../pages/about-popover/about-popover';
//import { AccountPage } from '../pages/account/account';

//import { MapPage } from '../pages/map/map';

//import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
//import { SessionDetailPage } from '../pages/session-detail/session-detail';
//import { SignupPage } from '../pages/signup/signup';
//import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
//import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
//import { TabsPage } from '../pages/tabs-page/tabs-page';

//import { SupportPage } from '../pages/support/support';















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                //AccountPage,
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                //MapPage,
                //PopoverPage,
                __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__["a" /* SchedulePage */],
                //ScheduleFilterPage,
                //SessionDetailPage,
                //SignupPage,
                //SpeakerDetailPage,
                //SpeakerListPage,
                //TabsPage,
                __WEBPACK_IMPORTED_MODULE_13__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_header_header__["a" /* HeaderComponent */],
                //SupportPage,
                __WEBPACK_IMPORTED_MODULE_14__pages_factura_detail_factura_detail__["a" /* FacturaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_factura_create_factura_create__["a" /* FacturaCreatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_factura_edit_factura_edit__["a" /* FacturaEditPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_22_css_animator__["AnimatesDirective"],
                __WEBPACK_IMPORTED_MODULE_23__pages_ion_simple_wizard_ion_simple_wizard_component__["a" /* IonSimpleWizard */],
                __WEBPACK_IMPORTED_MODULE_24__pages_ion_simple_wizard_ion_simple_wizard_step_component__["a" /* IonSimpleWizardStep */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modal_page_edit_modal_page_edit__["a" /* ModalPageEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        //{ component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                        //{ component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                        //{ component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        //{ component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
                        //{ component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                        //{ component: MapPage, name: 'Map', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        //{ component: SupportPage, name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        //{ component: AccountPage, name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_factura_detail_factura_detail__["a" /* FacturaDetailPage */], name: 'FacturaDetailPage', segment: 'factura-detail' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_factura_create_factura_create__["a" /* FacturaCreatePage */], name: 'FacturaCreatePage', segment: 'factura-create' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_factura_edit_factura_edit__["a" /* FacturaEditPage */], name: 'FacturaEditPage', segment: 'factura-edit' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */], name: 'SettingsPage', segment: 'settings' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_modal_page_edit_modal_page_edit__["a" /* ModalPageEditPage */], name: 'ModalPageEditPage', segment: 'modal-page-edit' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                //AccountPage,
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                //MapPage,
                //PopoverPage,
                __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__["a" /* SchedulePage */],
                //ScheduleFilterPage,
                //SessionDetailPage,
                //SignupPage,
                //SpeakerDetailPage,
                //SpeakerListPage,
                //TabsPage,
                //TutorialPage,
                //SupportPage,
                __WEBPACK_IMPORTED_MODULE_14__pages_factura_detail_factura_detail__["a" /* FacturaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_factura_create_factura_create__["a" /* FacturaCreatePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_factura_edit_factura_edit__["a" /* FacturaEditPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modal_page_edit_modal_page_edit__["a" /* ModalPageEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__providers_bill_service_bill_service__["a" /* BillService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_18__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_19__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_22_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_26__providers_get_user_get_user__["a" /* GetUserProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_bill_create_bill_create__["a" /* BillCreateProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_conference_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AboutPage } from '../pages/about/about';
//import { AccountPage } from '../pages/account/account';

//import { MapPage } from '../pages/map/map';
//import { SignupPage } from '../pages/signup/signup';
//import { TabsPage } from '../pages/tabs-page/tabs-page';

//import { SchedulePage } from '../pages/schedule/schedule';
//import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
//import { SupportPage } from '../pages/support/support';


var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [];
        this.loggedInPages = [];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ivette/Documents/app/src/app/app.template.html"*/'\n<ion-split-pane>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.signup = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Signup</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Schedule" tabIcon="calendar" tabUrlPath="conference-schedule"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Speakers" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Map" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conference_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getMap().subscribe(function (mapData) {
            var mapEle = _this.mapElement.nativeElement;
            var map = new google.maps.Map(mapEle, {
                center: mapData.find(function (d) { return d.center; }),
                zoom: 16
            });
            mapData.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    title: markerData.name
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                mapEle.classList.add('show-map');
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="map-page">\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var SpeakerListPage = (function () {
    function SpeakerListPage(actionSheetCtrl, navCtrl, confData, config, inAppBrowser) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: session.id });
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], { speakerId: speaker.id });
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + speaker.name,
            buttons: [
                {
                    text: "Email ( " + speaker.email + " )",
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open('mailto:' + speaker.email);
                    }
                },
                {
                    text: "Call ( " + speaker.phone + " )",
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: function () {
                        window.open('tel:' + speaker.phone);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Speakers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content speaker-list">\n  <ion-list [virtualScroll]="speakers">\n    <ion-grid fixed>\n      <ion-row align-items-stretch>\n\n        <ion-col col-12 col-md-6 align-self-stretch align-self-center *virtualItem="let speaker" approxItemHeight="457px">\n\n          <ion-card class="speaker-card">\n            <ion-card-header>\n              <button ion-item detail-none (click)="goToSpeakerDetail(speaker)">\n                <ion-avatar item-start>\n                  <img [src]="speaker.profilePic" alt="Speaker profile pic">\n                </ion-avatar>\n                {{speaker.name}}\n              </button>\n            </ion-card-header>\n\n            <ion-card-content class="outer-content">\n              <ion-list>\n                <button ion-item *ngFor="let session of speaker.sessions" (click)="goToSessionDetail(session)">\n                  <h3>{{session.name}}</h3>\n                </button>\n\n                <button ion-item (click)="goToSpeakerDetail(speaker)">\n                  <h3>About {{speaker.name}}</h3>\n                </button>\n              </ion-list>\n            </ion-card-content>\n\n            <ion-row no-padding>\n              <ion-col col-12 col-lg-auto text-center text-lg-left>\n                <button ion-button clear small color="primary" icon-start (click)="goToSpeakerTwitter(speaker)">\n                  <ion-icon name="logo-twitter"></ion-icon>\n                  Tweet\n                </button>\n              </ion-col>\n              <ion-col col-12 col-lg-auto text-center>\n                <button ion-button clear small color="primary" icon-start (click)="openSpeakerShare(speaker)">\n                  <ion-icon name=\'share-alt\'></ion-icon>\n                  Share\n                </button>\n              </ion-col>\n              <ion-col col-12 col-lg-auto text-center text-lg-right>\n                <button ion-button clear small color="primary" icon-start (click)="openContact(speaker)">\n                  <ion-icon name=\'chatboxes\'></ion-icon>\n                  Contact\n                </button>\n              </ion-col>\n            </ion-row>\n\n          </ion-card>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            if (session && session.id === _this.navParams.data.sessionId) {
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-session-detail',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/session-detail/session-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="session">{{session.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="session">\n    <h1>{{session.name}}</h1>\n    <h4 *ngFor="let speaker of session?.speakers">\n    {{speaker.name}}\n  </h4>\n    <p>\n      {{session.timeStart}} - {{session.timeEnd}}\n    </p>\n    <p>{{session.location}}</p>\n    <p>{{session.description}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/session-detail/session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === _this.navParams.data.speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{speaker?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="speaker-detail">\n  <div text-center *ngIf="speaker">\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n    <button ion-button icon-only clear small color="twitter">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="github">\n      <ion-icon name="logo-github"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small color="instagram">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>\n  </div>\n\n  <p>{{speaker?.about}}</p>\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/speaker-detail/speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_plus__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    HeaderComponent.prototype.settings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'global-header',template:/*ion-inline-start:"/home/ivette/Documents/app/src/components/header/header.html"*/'<!-- Generated template for the HeaderComponent component -->\n<ion-header>\n  <ion-navbar>\n    \n    <ion-buttons>\n      <button ion-button icon-only (click)="settings()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n    <button ion-button icon-only (click)="logoutGoogle()">\n      <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n    </button>\n    </ion-buttons>\n\n  </ion-navbar>\n  </ion-header>'/*ion-inline-end:"/home/ivette/Documents/app/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Constant } from '../constants';
//import * as Constant from '../constants';
//import { Storage } from '@ionic/storage';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BillService = (function () {
    function BillService(http) {
        this.http = http;
    }
    BillService.prototype.getBill = function (userId) {
        //return this.http.get('http://codificandoideas.org/recuerdame/api/facturas');
        var postParams = { userId: userId };
        return this.http.post("api/recuerdame/api/facturas", postParams);
    };
    BillService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BillService);
    return BillService;
}());

//# sourceMappingURL=bill-service.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonSimpleWizardStep; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_simple_wizard_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ion_simple_wizard_animations__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonSimpleWizardStep = (function () {
    function IonSimpleWizardStep(parent, evts) {
        var _this = this;
        this.parent = parent;
        this.evts = evts;
        this.step = this.parent.addStep();
        this.isCurrent = this.step === this.parent.step;
        this.parent.stepChange.subscribe(function (step) {
            _this.isCurrent = _this.step === step;
            if (_this.isCurrent) {
                _this.evts.publish('step:changed', _this.step);
            }
        });
    }
    IonSimpleWizardStep = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-wizard-step',
            host: {
                '[@WizardAnimations]': 'isCurrent ?"enter":"leave"'
            },
            template: "\n    <ng-content></ng-content>\n  ",
            animations: __WEBPACK_IMPORTED_MODULE_3__ion_simple_wizard_animations__["a" /* WizardAnimations */].zoom //TO DO: Change the animation by @Input for example
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ion_simple_wizard_component__["a" /* IonSimpleWizard */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */]])
    ], IonSimpleWizardStep);
    return IonSimpleWizardStep;
}());

//# sourceMappingURL=ion-simple-wizard.step.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__factura_detail_factura_detail__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factura_create_factura_create__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__factura_edit_factura_edit__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchedulePage = (function () {
    function SchedulePage(navCtrl, alertController, storage) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.getfacturas = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('facturas').then(function (facturas) {
            _this.localFacturas = JSON.parse(facturas);
            _this.getfacturas = _this.localFacturas.pendientes;
        });
    };
    SchedulePage.prototype.getPendientes = function () {
        this.getfacturas = this.localFacturas.pendientes;
    };
    SchedulePage.prototype.getCanceladas = function () {
        this.getfacturas = this.localFacturas.canceladas;
    };
    SchedulePage.prototype.itemTapped = function (factura) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__factura_detail_factura_detail__["a" /* FacturaDetailPage */], {
            factura: factura
        });
    };
    SchedulePage.prototype.createBill = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__factura_create_factura_create__["a" /* FacturaCreatePage */]);
    };
    SchedulePage.prototype.editBill = function (factura) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__factura_edit_factura_edit__["a" /* FacturaEditPage */], {
            data: factura
        });
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/schedule/schedule.html"*/'\n<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="avatar-square">\n    <img src="assets/img/ella/habla.gif"/>\n    <div class="message-avatar">¡Hola, este es tu dashboard!</div>\n  </ion-row>\n\n  <ion-row class="btn-factura">\n    <button ion-button icon-only color="danger" (click)="getPendientes()">  \n      Pendientes\n    </button>\n    <button ion-button icon-only (click)="getCanceladas()">  \n      Canceladas\n    </button>\n  </ion-row>\n\n  <ion-scroll scrollY="true" class="list-bill">\n    <ion-row sticky ion-item *ngFor="let factura of getfacturas" class="item-factura">\n          <img src="../assets/img/claro.png" alt="" class="logo">\n          <ion-row class="buton-event">\n          <ion-icon ios="ios-create" md="md-create" (click)="editBill(factura)" ></ion-icon>\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n        </ion-row>\n        <ion-row class="content-factura" (click)="itemTapped(factura)">\n          <ion-row>\n            <b>{{ factura.no_factura }}</b>\n          </ion-row>\n          <ion-row>\n            <b>Fecha de pago:</b> {{ factura.fecha_pago }}\n          </ion-row>\n          <ion-row class="price">\n            <b>Q{{ factura.valor_factura }}</b>\n          </ion-row>\n        </ion-row>\n    </ion-row>  \n  </ion-scroll>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="createBill()">   \n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/schedule/schedule.html"*/,
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map