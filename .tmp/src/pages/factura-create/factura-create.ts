import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { FacturaEditPage } from '../factura-edit/factura-edit';
import { BillCreateProvider } from '../../providers/bill-create/bill-create';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FacturaCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factura-create',
  templateUrl: 'factura-create.html',
})
export class FacturaCreatePage {
  step: any;
  stepCondition: any;
  stepDefaultCondition: any;
  currentStep: any;
  data = {
    id: ""
  };

  proveedores:any[] = [];
  dir:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public billCreateProvider: BillCreateProvider, 
    public evts: Events,
    public storage: Storage
  ) {
    
    this.storage.get('avatar').then((avatar) => {
      this.dir = JSON.parse(avatar);
    });


    this.step = 1;//The value of the first step, always 1
    this.stepCondition = false;//Set to true if you don't need condition in every step
    this.stepDefaultCondition = this.stepCondition;//Save the default condition for every step
    //You can subscribe to the Event 'step:changed' to handle the current step
    this.evts.subscribe('step:changed', step => {
      //Handle the current step if you need
      this.currentStep = step[0];
      //Set the step condition to the default value
      this.stepCondition = this.stepDefaultCondition;
    });

    this.evts.subscribe('step:back', () => {
      //Do something if back
      console.log('Back pressed: ', this.currentStep);
      this.stepCondition = true;

    });
  }

  onFinish() {
    this.navCtrl.push(FacturaEditPage, {
      data: this.data});
    /*this.alertCtrl.create({
      message: 'Wizard Finished!!',
      title: 'Congrats!!',
      buttons: [{
        text: 'Ok'
      }]
    }).present();*/
  }
  
  toggle() {
    this.stepCondition = !this.stepCondition;
  }
  getIconStep2() {
    return this.stepCondition ? 'unlock' : 'lock';
  }

  getIconStep3() {
    return this.stepCondition ? 'happy' : 'sad';
  }
  getLikeIcon() {
    return this.stepCondition ? 'thumbs-down' : 'thumbs-up';
  }

  textChange(e) {
    if (e.target.value && e.target.value.trim() !== '') {
      this.stepCondition = true;
    } else {
      this.stepCondition = false;
    }
  }
  
  selectProvider() {
    //  this.data.proveedor = e;
      this.stepCondition = true;
  }
  
  sendDataCeate() {
    this.navCtrl.push(FacturaEditPage, {
      data: this.data
    });
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

  }

}
  