import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AnimationService, AnimationBuilder } from 'css-animator';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  @ViewChild('#message') myElem;

  image:any;
  //private animator: AnimationBuilder;

  constructor(public navCtrl: NavController, public navParams: NavParams/*, animationService: AnimationService*/) {
    this.image = "habla-el.gif";
    //this.animator = animationService.builder();

  }

  avatar(avatar){
    this.image = avatar;
  }

  ionViewDidLoad() {
   // this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

}
