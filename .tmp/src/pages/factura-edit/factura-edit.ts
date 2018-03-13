import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
    public billCreateProvider: BillCreateProvider, public modalCtrl: ModalController,
    public modalPageEditPage: ModalPageEditPage
  ) {
    
    this.data = navParams.get('data');
    console.log(this.data);
  }

  logForm() {
    console.log(this.data);
  }

  ionViewDidLoad() {
    let modalPage = this.modalCtrl.create('this.modalPageEditPage');
    modalPage.present();
  }

}
