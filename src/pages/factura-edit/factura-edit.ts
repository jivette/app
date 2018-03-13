import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { BillCreateProvider } from '../../providers/bill-create/bill-create';
import { ModalPageEditPage } from '../modal-page-edit/modal-page-edit';

/**
 * Generated class for the FacturaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factura-edit',
  templateUrl: 'factura-edit.html',
})
export class FacturaEditPage {
  //selectedItem: any;

  data = {}
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public billCreateProvider: BillCreateProvider, public modalCtrl: ModalController
  ) {
    this.data = navParams.get('data');
  }

  logForm() {
    console.log(this.data);
  }

  otro() {
    let modal = this.modalCtrl.create(ModalPageEditPage);
    modal.present();
  }

  ionViewDidLoad() {
    this.otro();
  }

}
