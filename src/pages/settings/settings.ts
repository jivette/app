import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { GetUserProvider } from '../../providers/get-user/get-user';
import { Storage } from '@ionic/storage';
import { SchedulePage } from '../schedule/schedule';
import { GlobalProvider } from '../../providers/global/global';

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
  classSelector = "active";
  name = "";
  //private animator: AnimationBuilder;

  settings:any;
  icon:any;
  tokenCode: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    public getUserProvider: GetUserProvider, 
    public globalProvider: GlobalProvider
    ) {

    this.globalProvider.showLogout = true;

    //this.image = "ella";
    //this.animator = animationService.builder();
    this.storage.get('token').then((token) => {
      this.tokenCode = JSON.parse(token);
    });

    this.storage.get('avatar').then((avatar) => {
      this.image = JSON.parse(avatar);
      console.log(this.image);
    });
  }

  avatar(avatar){
    this.image = avatar;

    if(avatar == "ella"){
      this.icon = 1
    } else if (avatar == "el"){
      this.icon = 0
    } else {
      this.icon = 2

    }
  }

  ionViewDidLoad() {
   // this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

  saveAvatar(){
    this.settings = {
      token: this.tokenCode,
      avatar: this.icon
    }

    this.getUserProvider.getSetting(this.settings)
    .subscribe(
      (data) => { // Success
        console.log(data);
        if (data.code == 200) {
        
          if (this.icon == 1) {
            let avatar = JSON.stringify("ella");
            this.storage.set('avatar', avatar);
          } else if (this.icon == 0) {
            let avatar = JSON.stringify("el");
            this.storage.set('avatar', avatar);
          } else {
            let avatar = JSON.stringify("factura");
            this.storage.set('avatar', avatar);
          }
          
          let toast = this.toastCtrl.create({
            message: 'Has cambiado tu avatar',
            duration: 3000,
            position: 'top'
          });

          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });

          toast.present();

          this.navCtrl.push(SchedulePage);
        } else {
          alert("error!");
        }
      },
      (error) => {
        console.error(error);
      }
    );

  }
}
