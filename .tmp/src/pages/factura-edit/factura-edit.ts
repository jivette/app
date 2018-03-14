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

  data = {
    id: ""
  };
  proveedores: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public billCreateProvider: BillCreateProvider, public modalCtrl: ModalController
  ) {
    this.data = navParams.get('data');
  }

  logForm() {
    console.log(this.data);
  }

  showModal() {
    let modal = this.modalCtrl.create(ModalPageEditPage);
    modal.present();
  }

  ionViewDidLoad() {
    this.billCreateProvider.getProveedor()
    .subscribe(
      (data) => { // Success
        if (data.code == 200) {

          this.proveedores = data.proveedores;
        } else {
          alert("error!");
        }
      },
      (error) => {
        console.error(error);
      }
    );

    if (this.data.id == "") {
      this.showModal();
    }
  }

}
