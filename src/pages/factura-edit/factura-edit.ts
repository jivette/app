import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillCreateProvider } from '../../providers/bill-create/bill-create';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public billCreateProvider: BillCreateProvider
  ) {
    this.data = navParams.get('data');
    
  }

  data = {}
  logForm() {
    console.log(this.data);
  }

  ionViewDidLoad() {
    //console.log(this.selectedItem);
  }

}
