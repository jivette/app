import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
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

@IonicPage()
@Component({
  selector: 'page-factura-edit',
  templateUrl: 'factura-edit.html',
})
export class FacturaEditPage {
  //selectedItem: any;


  proveedores: any[] = [];
  tokenCode:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public billCreateProvider: BillCreateProvider, public modalCtrl: ModalController,
    public storage: Storage,
    public toastCtrl: ToastController
  ) {
    this.data = navParams.get('data');

    this.storage.get('token').then((token) => {
      this.tokenCode = JSON.parse(token);
    });

  }
  data = {
    id: "",
    token: ""
  };


  showModal() {
    let modal = this.modalCtrl.create(ModalPageEditPage);
    modal.present();
  }

  ionViewDidLoad() {
    this.storage.get('proveedores').then((proveedores) => {
      this.proveedores = JSON.parse(proveedores);
      console.log(this.proveedores);
    });
   
    if (this.data.id == "") {
      this.showModal();
    }
  }

  save(){
    this.data.token = this.tokenCode;

    console.log("save");
    if (this.data.id == "") {

      console.log("crear");
      console.log(this.data);

      this.billCreateProvider.createBill(this.data)
      .subscribe(
        (data) => { // Success
          console.log(data);
          if (data.code == 200) {

            let val = JSON.stringify(data.facturas);
            this.storage.set('facturas', val);

            let toast = this.toastCtrl.create({
              message: 'Has creado tu factura',
              duration: 3000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();

            this.navCtrl.push(SchedulePage);
          } else {
            alert("error!");
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log("editar");
      console.log(this.data);

      this.billCreateProvider.updateBill(this.data)
      .subscribe(
        (data) => { // Success
          console.log(data);
          if (data.code == 200) {
            let toast = this.toastCtrl.create({
              message: 'Se ha actualizado con éxito',
              duration: 3000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();

            this.navCtrl.push(SchedulePage);

            // this.proveedores = data.proveedores;
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
}
