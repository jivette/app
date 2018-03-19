import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController/*, AlertController*/ } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { SchedulePage } from '../schedule/schedule';
import { SignupPage } from '../signup/signup';

import { GooglePlus } from '@ionic-native/google-plus';
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
    private googlePlus: GooglePlus, 
    public getUserProvider: GetUserProvider,
   // private alertCtrl: AlertController,
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
  avatar:any;

  loginGoogle(){
  /*  let user = {
      token : "12545",
      nombre : "Ivette",
      correo : "correo@gmail.com"
    }*/
/*
    this.getUserProvider.getUser(user)
      .subscribe(
        (data) => { // Success
          console.log(data);

          if(data.code == 200){
            let token = JSON.stringify(user.token);
            this.storage.set('token', token);
            
            if (data.avatar == 0){
              this.avatar = JSON.stringify("el");
            } else if(data.avatar == 1) {
              this.avatar = JSON.stringify("ella");
            } else {
              this.avatar = JSON.stringify("factura");
            }

            this.storage.set('avatar', this.avatar);
           
            let val = JSON.stringify(data.facturas);
            this.storage.set('facturas', val);
            
            let proveedores = JSON.stringify(data.proveedores);
            this.storage.set('proveedores', proveedores);
            
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

*/


    this.googlePlus.getSigningCertificateFingerprint()
    .then(res => console.log("22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222" + res))
    .catch(err => console.error("3333333333333333333333333333333333333333333333333333333333333333333322222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 inicia error " + err + ' termina error'));


   /* this.googlePlus.login({})
      .then(res => console.log("22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222" + res))
      .catch(err => console.error("3333333333333333333333333333333333333333333333333333333333333333333322222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 inicia error " + err +' termina error'));
*/
  /*  this.googlePlus.login({})
    .then((res) => {
      if (res) {
        console.log(res);
       this.navCtrl.push(SchedulePage);
      }
    })
    .catch(err => console.error(err));*/
  }
}
 