import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';
import { SettingsPage } from '../../pages/settings/settings';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'global-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;

  constructor(private googlePlus: GooglePlus, public storage: Storage, public navCtrl: NavController, 
) { 
  }

  logoutGoogle(){
    this.storage.clear();
    this.googlePlus.logout();
    this.navCtrl.push(LoginPage);

  }

  settings(){
    this.navCtrl.push(SettingsPage);
  }

}
