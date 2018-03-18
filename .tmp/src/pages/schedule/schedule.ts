import { Component } from '@angular/core';

import { AlertController,/* App, ModalController, */NavController, ToastController} from 'ionic-angular';

import { FacturaDetailPage } from '../factura-detail/factura-detail';
import { FacturaCreatePage } from '../factura-create/factura-create';
import { FacturaEditPage } from '../factura-edit/factura-edit';
import { Storage } from '@ionic/storage';
import { BillCreateProvider } from '../../providers/bill-create/bill-create';


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  providers: []

})
export class SchedulePage {
  getfacturas: any[] = [];
  localFacturas:any; 
  dir:any;
  tokenCode:any;
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public billCreateProvider: BillCreateProvider,
    public storage: Storage,
    public toastCtrl: ToastController
  ){}

  ionViewDidLoad() {
    this.storage.get('facturas').then((facturas) => {
      this.localFacturas = JSON.parse(facturas);

      this.getfacturas = this.localFacturas.pendientes;
    });

    this.storage.get('avatar').then((avatar) => {
      this.dir = JSON.parse(avatar);
      console.log(this.dir);
    });


    this.storage.get('token').then((token) => {
      this.tokenCode = JSON.parse(token);
    });

  }

  getPendientes(){
    this.getfacturas = this.localFacturas.pendientes;
  }

  getCanceladas(){
    this.getfacturas = this.localFacturas.canceladas;
  }

  itemTapped(factura) {
    this.navCtrl.push(FacturaDetailPage, {
      factura: factura
    });
  }
  createBill() {
    this.navCtrl.push(FacturaCreatePage);
  }
  editBill(factura) {
    this.navCtrl.push(FacturaEditPage, {
      data: factura
    });
  }
  cancelBill(estado){
    console.log(estado);
    estado = {
      uuid: estado.uuid,
      estado_id: 2,
      token: this.tokenCode
    };
    
    console.log(estado);
    this.billCreateProvider.refreshStatus(estado)
      .subscribe(
        (data) => { // Success
          console.log(data);
          if (data.code == 200) {

            let toast = this.toastCtrl.create({
              message: 'tu factura se a cancelado',
              duration: 3000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();

          } else {
            alert("error!");
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
