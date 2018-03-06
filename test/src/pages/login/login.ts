import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { SchedulePage } from '../schedule/schedule';
import { SignupPage } from '../signup/signup';

//import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage { 
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public navCtrl: NavController, 
    public userData: UserData, 
    //private googlePlus: GooglePlus, 
    public storage: Storage) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(SchedulePage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  loginGoogle(){
       this.navCtrl.push(SchedulePage);
/*    this.googlePlus.login({})
    .then((res) => {
      if (res) {
       this.navCtrl.push(SchedulePage);
      }
    })
    .catch(err => console.error(err));*/
  }
}
 