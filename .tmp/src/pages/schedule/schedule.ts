import { Component } from '@angular/core';

import { AlertController,/* App, ModalController, */ 
  ViewController, Platform, NavController, ToastController} from 'ionic-angular';

import { FacturaDetailPage } from '../factura-detail/factura-detail';
import { FacturaCreatePage } from '../factura-create/factura-create';
import { FacturaEditPage } from '../factura-edit/factura-edit';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { BillCreateProvider } from '../../providers/bill-create/bill-create';
import { GlobalProvider } from '../../providers/global/global';


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
  messageAvatarHome:any;
  emptyBill:any;
  statusCanceladas:any;
  session:any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public billCreateProvider: BillCreateProvider,
    public storage: Storage,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public globalProvider: GlobalProvider
  ){
    this.globalProvider.showLogout = false;

    this.messageAvatarHome = "¡Hola, este es tu dashboard!";
    this.statusCanceladas = false;


    platform.registerBackButtonAction(() => {
      this.storage.get('user').then(data => {
        if (data) { 
        } else {
          let errorLogin = this.alertCtrl.create({
            title: '¡Error!',
            subTitle: 'No haz iniciado sesion',
            buttons: [
              {
                text: 'Iniciar Sesión',
                handler: () => {
                  this.navCtrl.push(LoginPage);
                }
              }
            ]

          });
          errorLogin.present();
     
        }
      });
    });
  }


  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);  
    this.globalProvider.showLogout = false;
  }

  ionViewDidLoad() {
    

    this.storage.get('facturas').then((facturas) => {
      this.localFacturas = JSON.parse(facturas);

      this.getfacturas = this.localFacturas.pendientes;

      if (this.localFacturas.pendientes.length == 0 &&
        this.localFacturas.canceladas.length == 0) {
        this.emptyBill = true;
        this.messageAvatarHome = "¡Aun no tienes facturas!";
      } else {
        this.emptyBill = false;
      }

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
    this.statusCanceladas = false;
  }

  getCanceladas(){
    this.getfacturas = this.localFacturas.canceladas;
    this.statusCanceladas = true;
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
    estado = {
      uuid: estado.uuid,
      estado_id: 2,
      token: this.tokenCode
    };
    

    let alertCancel = this.alertCtrl.create({
      title: 'Cancelar factura',
      message: 'Ya has pagado tu factura?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.billCreateProvider.refreshStatus(estado)
              .subscribe(
                (data) => { // Success
                  console.log(data);
                  if (data.code == 200) {
                    let val = JSON.stringify(data.facturas);
                    this.storage.set('facturas', val);


                    this.localFacturas = data.facturas;
                    this.getfacturas = data.facturas.pendientes;

                    let toast = this.toastCtrl.create({
                      message: 'Tu factura se ha cancelado',
                      duration: 3000,
                      position: 'top'
                    });

                    toast.onDidDismiss(() => {
                      console.log('Dismissed toast');
                    });

                    toast.present();

                  } else {
                    let cancelError = this.alertCtrl.create({
                      title: '¡Error!',
                      subTitle: 'Verfica tu conexión',
                      buttons: ['Continuar']
                    });
                    cancelError.present();                  
                  }
                },
                (error) => {
                  console.error(error);
                  let cancelErrorSuscribe = this.alertCtrl.create({
                    title: '¡Error!',
                    subTitle: 'Verfica tu conexión',
                    buttons: ['Continuar']
                  });
                  cancelErrorSuscribe.present();                  

                }
              );
          }
        }
      ]
    });
    alertCancel.present();

  }
  deleteBill(deletebillObject){
    deletebillObject = {
      uuid: deletebillObject.uuid,
      estado_id: 3,
      token: this.tokenCode
    };
    

    let alertCancel = this.alertCtrl.create({
      title: 'Eliminar factura',
      message: 'Estas seguro que deseas eliminar esta factura?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.billCreateProvider.deleteBill(deletebillObject)
              .subscribe(
                (data) => { // Success
                  console.log(data);
                  if (data.code == 200) {
                    let val = JSON.stringify(data.facturas);
                    this.storage.set('facturas', val);


                    this.localFacturas = data.facturas;
                    this.getfacturas = data.facturas.pendientes;

                    let toast = this.toastCtrl.create({
                      message: 'Tu factura se ha eliminado',
                      duration: 3000,
                      position: 'top'
                    });

                    toast.onDidDismiss(() => {
                      console.log('Dismissed toast');
                    });

                    toast.present();

                  } else {
                    let cancelError = this.alertCtrl.create({
                      title: '¡Error!',
                      subTitle: 'Verfica tu conexión',
                      buttons: ['Continuar']
                    });
                    cancelError.present();                  
                  }
                },
                (error) => {
                  console.error(error);
                  let cancelErrorSuscribe = this.alertCtrl.create({
                    title: '¡Error!',
                    subTitle: 'Verfica tu conexión',
                    buttons: ['Continuar']
                  });
                  cancelErrorSuscribe.present();                  

                }
              );
          }
        }
      ]
    });
    alertCancel.present();

  }
}
