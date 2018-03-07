import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  todo = {}
  logForm() {
    console.log(this.todo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturaEditPage');
  }

}
