import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController/*, Platform*/ } from 'ionic-angular';
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

@IonicPage()
@Component({
  selector: 'page-factura-edit',
  templateUrl: 'factura-edit.html',
})
export class FacturaEditPage {
  //selectedItem: any;

  today: String = new Date().toISOString();
  dateNow: any;
  proveedores: any[] = [];
  dayCont: any[] = [];
  tokenCode:any;
  newDate:any;
  diff:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public billCreateProvider: BillCreateProvider, public modalCtrl: ModalController,
    public storage: Storage,
    public toastCtrl: ToastController,
    public globalProvider: GlobalProvider
    //public platform: Platform,
   // private localNotifications: LocalNotifications
  ) {
    this.today = new Date().toISOString();
    this.data = navParams.get('data');

    this.storage.get('token').then((token) => {
      this.tokenCode = JSON.parse(token);
    });

    this.globalProvider.showLogout = false;
  }

  data = {
    id: "",
    token: ""
  };

  ionViewWillEnter() {
    this.globalProvider.showLogout = false;
  }
  showModal() {
    let modal = this.modalCtrl.create(ModalPageEditPage);
    modal.present();
  }

  onChange(event){
    this.dateNow = new Date();
    event = new Date(event);

    let valor = event - this.dateNow;
    this.diff = valor / (1000 * 60 * 60 * 24);
    this.diff = Math.round(this.diff);
    
    this.calculate(this.diff);
  }
 
  calculate(diff){
    this.dayCont = [];
    if(diff > 31){
      diff = 31;
    }
    for (let index = 1; index <= diff; index++) {
      this.dayCont.push({ id: index });
    }
  }

  ionViewDidLoad() {
    this.storage.get('proveedores').then((proveedores) => {
      this.proveedores = JSON.parse(proveedores);
      console.log(this.proveedores);
    });
   
    if (this.data.id == "") {
      this.showModal();
      this.calculate(31);
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

            this.alertNotification(this.data);

            let val = JSON.stringify(data.facturas);
            this.storage.set('facturas', val);

            //this.notification();

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



  alertNotification(dataNoti){
    let nombre = dataNoti.nombre;
    let mensaje = "¡Tu factura " + nombre + " está próxima a vencer!";
    let fecha_pago = dataNoti.fecha_pago;
    fecha_pago = fecha_pago.replace("-", "/");

    let dias = dataNoti.dias;
    let date = new Date(fecha_pago);
    let dayOfMonth = date.getDate();

    date.setDate(dayOfMonth - dias);
    date.setHours(13,0,0);
    


    window["plugins"].OneSignal.getIds(function (ids) {
      var notificationObj = {

        contents: { en: mensaje },
        include_player_ids: [ids.userId],
        send_after: date,
      };

      window["plugins"].OneSignal.postNotification(notificationObj,
        function (successResponse) {
          console.log("Notification Post Success:", successResponse);
        },
        function (failedResponse) {
          console.log("Notification Post Failed: ", failedResponse);
          alert("Notification Post Failed:\n" + JSON.stringify(failedResponse));
        }
      );
    });          
  }
}
