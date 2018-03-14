import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('factura');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturaDetailPage');
  }

}

