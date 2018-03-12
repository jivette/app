import { Component } from '@angular/core';

import { AlertController,/* App, ModalController, */NavController} from 'ionic-angular';

import { FacturaDetailPage } from '../factura-detail/factura-detail';
import { FacturaCreatePage } from '../factura-create/factura-create';
import { FacturaEditPage } from '../factura-edit/factura-edit';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  providers: []

})
export class SchedulePage {
  getfacturas: any[] = [];
  localFacturas:any;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public storage: Storage
  ) {

     this.localFacturas = this.storage.get("facturas");

  }

  ionViewDidLoad() {
    this.getfacturas = this.localFacturas.pendientes;
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

}
