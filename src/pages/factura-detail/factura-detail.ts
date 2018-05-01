import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the FacturaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-factura-detail',
  templateUrl: 'factura-detail.html',
})
export class FacturaDetailPage {
  data: any;
  proveedores: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage: Storage,
    public globalProvider: GlobalProvider) {
    
    this.globalProvider.showLogout = false;

    this.data = navParams.get('factura');
   
    this.storage.get('proveedores').then((proveedores) => {
      this.proveedores = JSON.parse(proveedores);
      console.log(this.proveedores);
    });
  }
  ionViewWillEnter() {
    this.globalProvider.showLogout = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturaDetailPage');
  }

}

