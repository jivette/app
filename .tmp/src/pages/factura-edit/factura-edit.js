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
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { BillCreateProvider } from '../../providers/bill-create/bill-create';
import { ModalPageEditPage } from '../modal-page-edit/modal-page-edit';
import { Storage } from '@ionic/storage';
import { SchedulePage } from '../schedule/schedule';
//import { LocalNotifications } from '@ionic-native/local-notifications';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the FacturaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaEditPage = (function () {
    function FacturaEditPage(navCtrl, navParams, billCreateProvider, modalCtrl, storage, toastCtrl, globalProvider
        //public platform: Platform,
        // private localNotifications: LocalNotifications
    ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billCreateProvider = billCreateProvider;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.globalProvider = globalProvider;
        //selectedItem: any;
        this.today = new Date().toISOString();
        this.proveedores = [];
        this.dayCont = [];
        this.data = {
            id: "",
            token: ""
        };
        this.today = new Date().toISOString();
        this.data = navParams.get('data');
        this.storage.get('token').then(function (token) {
            _this.tokenCode = JSON.parse(token);
        });
        this.globalProvider.showLogout = false;
    }
    FacturaEditPage.prototype.ionViewWillEnter = function () {
        this.globalProvider.showLogout = false;
    };
    FacturaEditPage.prototype.showModal = function () {
        var modal = this.modalCtrl.create(ModalPageEditPage);
        modal.present();
    };
    FacturaEditPage.prototype.onChange = function (event) {
        this.dateNow = new Date();
        event = new Date(event);
        var valor = event - this.dateNow;
        this.diff = valor / (1000 * 60 * 60 * 24);
        this.diff = Math.round(this.diff);
        this.calculate(this.diff);
    };
    FacturaEditPage.prototype.calculate = function (diff) {
        this.dayCont = [];
        if (diff > 31) {
            diff = 31;
        }
        for (var index = 1; index <= diff; index++) {
            this.dayCont.push({ id: index });
        }
    };
    FacturaEditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('proveedores').then(function (proveedores) {
            _this.proveedores = JSON.parse(proveedores);
            console.log(_this.proveedores);
        });
        if (this.data.id == "") {
            this.showModal();
            this.calculate(31);
        }
    };
    FacturaEditPage.prototype.save = function () {
        var _this = this;
        this.data.token = this.tokenCode;
        console.log("save");
        if (this.data.id == "") {
            console.log("crear");
            console.log(this.data);
            this.billCreateProvider.createBill(this.data)
                .subscribe(function (data) {
                console.log(data);
                if (data.code == 200) {
                    _this.alertNotification(_this.data);
                    var val = JSON.stringify(data.facturas);
                    _this.storage.set('facturas', val);
                    //this.notification();
                    var toast = _this.toastCtrl.create({
                        message: 'Has creado tu factura',
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
        }
        else {
            console.log("editar");
            console.log(this.data);
            this.billCreateProvider.updateBill(this.data)
                .subscribe(function (data) {
                console.log(data);
                if (data.code == 200) {
                    var toast = _this.toastCtrl.create({
                        message: 'Se ha actualizado con éxito',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                    _this.navCtrl.push(SchedulePage);
                    // this.proveedores = data.proveedores;
                }
                else {
                    alert("error!");
                }
            }, function (error) {
                console.error(error);
            });
        }
    };
    FacturaEditPage.prototype.alertNotification = function (dataNoti) {
        var nombre = dataNoti.nombre;
        var mensaje = "¡Tu factura " + nombre + " está próxima a vencer!";
        var fecha_pago = dataNoti.fecha_pago;
        fecha_pago = fecha_pago.replace("-", "/");
        var dias = dataNoti.dias;
        var date = new Date(fecha_pago);
        var dayOfMonth = date.getDate();
        date.setDate(dayOfMonth - dias);
        date.setHours(13, 0, 0);
        window["plugins"].OneSignal.getIds(function (ids) {
            var notificationObj = {
                contents: { en: mensaje },
                include_player_ids: [ids.userId],
                send_after: date,
            };
            window["plugins"].OneSignal.postNotification(notificationObj, function (successResponse) {
                console.log("Notification Post Success:", successResponse);
            }, function (failedResponse) {
                console.log("Notification Post Failed: ", failedResponse);
                alert("Notification Post Failed:\n" + JSON.stringify(failedResponse));
            });
        });
    };
    FacturaEditPage = __decorate([
        Component({
            selector: 'page-factura-edit',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/factura-edit/factura-edit.html"*/'\n<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="factura">\n			<img src="assets/img/logo.png" alt=""  class="logo">	\n\n	\n			<form #myForm="ngForm" (ngSubmit)="save()"> \n		      <ion-item class="item-no-factura">\n  		        <ion-label>No:</ion-label>\n		          <ion-input required class="no-factura" type="number" [(ngModel)]="data.no_factura" name="no_factura"></ion-input>\n		        </ion-item>\n\n				<ion-item>\n					<ion-label>Nombre de factura:</ion-label>\n					<ion-input required type="text" [(ngModel)]="data.nombre" name="nombre"></ion-input>\n				</ion-item>\n\n				<ion-list>\n					<ion-item>\n						<ion-label>Provedor</ion-label>\n								<ion-select required [(ngModel)]="data.proveedor_id" name="proveedor_id">\n									<ion-option value="{{proveedor.id}}" *ngFor="let proveedor of proveedores">{{proveedor.nombre}}</ion-option>\n								</ion-select>\n					</ion-item>\n				</ion-list>\n\n				<ion-item>\n					<ion-label>No. Servicio:</ion-label>\n					<ion-input type="number" required [(ngModel)]="data.no_servicio" name="no_servicio"></ion-input>\n				</ion-item>\n\n		        <ion-item> \n		       		<ion-label>Fecha de pago:</ion-label>\n					<ion-datetime \n					monthNames="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, \n					Agosto, Septiembre, Octubre, Noviembre, Diciembre" \n					displayFormat="MMMM DD YYYY" cancelText="Cancelar" \n					doneText="Seleccionar" [(ngModel)]="data.fecha_pago" \n					name="fecha_pago" required min="{{today}}"\n					(ngModelChange)="onChange($event)">\n					</ion-datetime>\n				</ion-item>\n\n					<ion-list>\n						<ion-item> \n							<ion-label>Recuerdame</ion-label>\n							<ion-select [(ngModel)]="data.dias" name="dias" required>\n								<ion-option value="{{cont.id}}" *ngFor="let cont of dayCont" >\n									{{cont.id}} días antes\n								</ion-option>\n							</ion-select>\n\n							<!--ion-label>En cuantos días te recuerdo</ion-label>\n								<ion-input type="number" [(ngModel)]="data.dias" name="dias"></ion-input>\n								<ion-datetime displayFormat="DD" [(ngModel)]="data.dias" name="dias"></ion-datetime-->\n						</ion-item>\n					</ion-list>\n\n					\n					<ion-item class="price">\n						<ion-label>Monto:  Q</ion-label>\n						<ion-input type="number" required [(ngModel)]="data.valor_factura" name="valor_factura"></ion-input>\n					</ion-item>\n\n\n\n		      <button ion-button [disabled]="!myForm.form.valid" type="submit" block>\n						Recuerdame\n					</button>\n		    </form>\n	  <ion-row class="tarjetas">\n	  </ion-row>\n  </ion-row>\n\n</ion-content>\n '/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/factura-edit/factura-edit.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            BillCreateProvider, ModalController,
            Storage,
            ToastController,
            GlobalProvider
            //public platform: Platform,
            // private localNotifications: LocalNotifications
        ])
    ], FacturaEditPage);
    return FacturaEditPage;
}());
export { FacturaEditPage };
//# sourceMappingURL=factura-edit.js.map