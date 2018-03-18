import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, AlertController } from 'ionic-angular';

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
    private alertCtrl: AlertController,
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
      token : "33333333",
      nombre : "Ivette",
      correo : "correo@gmail.com"
    }

    this.getUserProvider.getUser(user)
      .subscribe(
        (data) => { // Success
          if(data.code == 200){
            let token = JSON.stringify(user.token);
            this.storage.set('token', token);
            
            let avatar = JSON.stringify("ella");
            this.storage.set('avatar', avatar);
           
            let val = JSON.stringify(data.facturas);
            this.storage.set('facturas', val);
            
            //this.users = data;

            this.navCtrl.push(SchedulePage);
          } else {
            let alert = this.alertCtrl.create({
              title: 'Ha ocurrido un error!',
              subTitle: 'Verifica tu conexión',
              buttons: ['Aceptar']
            });
            alert.present();
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
 