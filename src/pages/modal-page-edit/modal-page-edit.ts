import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPageEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-page-edit',
  templateUrl: 'modal-page-edit.html',
})
export class ModalPageEditPage {

  constructor(public navCtrl: NavController,/* public viewCtrl: ViewController, */public navParams: NavParams) {
  }

  /*public closeModal() {
    this.viewCtrl.dismiss();
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPageEditPage');
  }

}
