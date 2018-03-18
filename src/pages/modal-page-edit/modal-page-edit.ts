import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  dir:any;

  constructor(public navCtrl: NavController, 
    public storage: Storage,
    public viewCtrl: ViewController, public navParams: NavParams) {
    this.storage.get('avatar').then((avatar) => {
      this.dir = JSON.parse(avatar);
    });  
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPageEditPage');
  }

}
