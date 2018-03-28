import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { GetUserProvider } from '../../providers/get-user/get-user';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'

})
export class LoginPage { 

  constructor(
    public navCtrl: NavController, 
    private googlePlus: GooglePlus, 
    public getUserProvider: GetUserProvider,
    private alertCtrl: AlertController,
    public storage: Storage) { }

  responseGoogle:any;
  user:any;
  avatar:any;

  loginGoogle(){
    this.googlePlus.login({})
    .then((res) => {
      if (res) {

        this.user = {
          token: res.userId,
          nombre: res.displayName,
          correo: res.email,
          session: "true"
        }

        let userStorage = JSON.stringify(this.user);
        this.storage.set('user', userStorage);

        this.getUserProvider.getUser(this.user)
          .subscribe(
            (data) => { // Success
              console.log(data);

              if (data.code == 200) {
                let token = JSON.stringify(this.user.token);
                this.storage.set('token', token);
                
                if (data.avatar == 0) {
                  this.avatar = JSON.stringify("el");
                } else if (data.avatar == 1) {
                  this.avatar = JSON.stringify("ella");
                } else {
                  this.avatar = JSON.stringify("factura");
                }

                this.storage.set('avatar', this.avatar);

                let val = JSON.stringify(data.facturas);
                this.storage.set('facturas', val);

                let proveedores = JSON.stringify(data.proveedores);
                this.storage.set('proveedores', proveedores);

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
      }
    })
    .catch(err => console.error(err));
  }
}
 