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
/**
 * Generated class for the FacturaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FacturaEditPage = (function () {
    function FacturaEditPage(navCtrl, navParams, billCreateProvider, modalCtrl, storage, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billCreateProvider = billCreateProvider;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        //selectedItem: any;
        this.proveedores = [];
        this.data = {
            id: "",
            token: ""
        };
        this.data = navParams.get('data');
        this.storage.get('token').then(function (token) {
            _this.tokenCode = JSON.parse(token);
        });
    }
    FacturaEditPage.prototype.showModal = function () {
        var modal = this.modalCtrl.create(ModalPageEditPage);
        modal.present();
    };
    FacturaEditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.billCreateProvider.getProveedor()
            .subscribe(function (data) {
            if (data.code == 200) {
                _this.proveedores = data.proveedores;
            }
            else {
                alert("error!");
            }
        }, function (error) {
            console.error(error);
        });
        if (this.data.id == "") {
            this.showModal();
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
    FacturaEditPage = __decorate([
        Component({
            selector: 'page-factura-edit',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/pages/factura-edit/factura-edit.html"*/'\n<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="factura">\n			<img src="../assets/img/claro.png" alt=""  class="logo">	\n\n	\n			<form>\n		      <ion-item class="item-no-factura">\n  		        <ion-label>NO:</ion-label>\n		          <ion-input class="no-factura" type="number" [(ngModel)]="data.no_factura" name="no_factura"></ion-input>\n		      </ion-item>\n\n					<ion-item>\n						<ion-label>Nombre de factura:</ion-label>\n						<ion-input type="text" [(ngModel)]="data.nombre" name="nombre"></ion-input>\n					</ion-item>\n\n					<ion-list>\n						<ion-item>\n							<ion-label>Provedor</ion-label>\n									<ion-select [(ngModel)]="data.proveedor_id" name="proveedor_id" (ionChange)="selectProvider()">\n										<ion-option value="{{proveedor.id}}" *ngFor="let proveedor of proveedores">{{proveedor.nombre}}</ion-option>\n									</ion-select>\n						</ion-item>\n					</ion-list>\n\n					<ion-item>\n						<ion-label>NO Servicio:</ion-label>\n						<ion-input type="number" [(ngModel)]="data.no_servicio" name="no_servicio"></ion-input>\n					</ion-item>\n\n		      <ion-item>\n		        <ion-label>Fecha de pago:</ion-label>\n		          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="data.fecha_pago" name="fecha_pago"></ion-datetime>\n		      </ion-item>\n\n					<ion-list>\n						<ion-item>\n							<ion-label>En cuantos días te recuerdo</ion-label>\n						<ion-input type="number" max="30" [(ngModel)]="data.dias" name="dias"></ion-input>\n						</ion-item>\n					</ion-list>\n\n					\n					<ion-item class="price">\n						<ion-label>Monto:  Q</ion-label>\n						<ion-input type="number" [(ngModel)]="data.valor_factura" name="valor_factura"></ion-input>\n					</ion-item>\n\n\n\n		      <button ion-button (click)="save()" block>Recuerdame</button>\n		    </form>\n	  <ion-row class="tarjetas">\n	  </ion-row>\n  </ion-row>\n\n</ion-content>\n '/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/pages/factura-edit/factura-edit.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            BillCreateProvider, ModalController,
            Storage,
            ToastController])
    ], FacturaEditPage);
    return FacturaEditPage;
}());
export { FacturaEditPage };
//# sourceMappingURL=factura-edit.js.map