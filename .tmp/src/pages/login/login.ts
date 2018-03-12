import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { SchedulePage } from '../schedule/schedule';
import { SignupPage } from '../signup/signup';

//import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { GetUserProvider } from '../../providers/get-user/get-user';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'

})
export class LoginPage { 
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  users: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public userData: UserData, 
    //private googlePlus: GooglePlus, 
    public getUserProvider: GetUserProvider,
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

  token:any;
  nombre:any;
  correo:any;

  loginGoogle(){

    let user = {
      token : "56156165",
      nombre : "Ivette",
      correo : "correo@gmail.com"
    }

    this.getUserProvider.getUser(user)
      .subscribe(
        (data) => { // Success
          if(data.code == 200){
            this.storage.set('user', user);
            this.storage.set('facturas', data.facturas);
            this.users = data;

            this.navCtrl.push(SchedulePage);
          } else {
            alert("error!");
          }
        },
        (error) => {
          console.error(error);
        }
    )

/*    this.googlePlus.login({})
    .then((res) => {
      if (res) {
       this.navCtrl.push(SchedulePage);
      }
    })
    .catch(err => console.error(err));*/
  }
}
 