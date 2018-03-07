var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { /*AlertController,*/ /* App, FabContainer, ItemSliding,*/ List, /* ModalController, */ NavController, } from 'ionic-angular';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';
//import { ConferenceData } from '../../providers/conference-data';
//import { UserData } from '../../providers/user-data';
//import { SessionDetailPage } from '../session-detail/session-detail';
//import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { FacturaDetailPage } from '../factura-detail/factura-detail';
import { FacturaCreatePage } from '../factura-create/factura-create';
import { FacturaEditPage } from '../factura-edit/factura-edit';
import { FACTURAS } from '../mock-facturas';
import { UserService } from '../../providers/user-service/user-service';
var SchedulePage = (function () {
    function SchedulePage(
        // public alertCtrl: AlertController,
        //public app: App,
        //  public loadingCtrl: LoadingController,
        //  public modalCtrl: ModalController,
        navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        // the list is a child of the schedule page
        // @ViewChild('scheduleList') gets a reference to the list
        // with the variable #scheduleList, `read: List` tells it to return
        // the List and not a reference to the element
        this.getfacturas = [];
        this.facturas = FACTURAS;
        /*dayIndex = 0;
        queryText = '';
        segment = 'all';
        excludeTracks: any = [];
        shownSessions: any = [];
        groups: any = [];
        confDate: string;*/
        this.number = 56156165;
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.getUsers(this.number)
            .subscribe(function (data) {
            _this.getfacturas = data['results'];
            console.log(_this.getfacturas);
        }, function (error) {
            console.error(error);
        });
    };
    /*ionViewDidLoad() {
      this.app.setTitle('Schedule');
      this.updateSchedule();
    }
  
    updateSchedule() {
      // Close any open sliding items when the schedule updates
      this.scheduleList && this.scheduleList.closeSlidingItems();
  
      this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
        this.shownSessions = data.shownSessions;
        console.log("Esto es importante ver " + this.shownSessions);
        this.groups = data.groups;
      });
    }
  
    presentFilter() {
      let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
      modal.present();
  
      modal.onWillDismiss((data: any[]) => {
        if (data) {
          this.excludeTracks = data;
          this.updateSchedule();
        }
      });
  
    }
  
    goToSessionDetail(sessionData: any) {
      // go to the session detail page
      // and pass in the session data
  
      this.navCtrl.push(SessionDetailPage, { sessionId: sessionData.id, name: sessionData.name });
    }
  
    addFavorite(slidingItem: ItemSliding, sessionData: any) {
  
      if (this.user.hasFavorite(sessionData.name)) {
        // woops, they already favorited it! What shall we do!?
        // prompt them to remove it
        this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
      } else {
        // remember this session as a user favorite
        this.user.addFavorite(sessionData.name);
  
        // create an alert instance
        let alert = this.alertCtrl.create({
          title: 'Favorite Added',
          buttons: [{
            text: 'OK',
            handler: () => {
              // close the sliding item
              slidingItem.close();
            }
          }]
        });
        // now present the alert on top of all other content
        alert.present();
      }
  
    }
  
    removeFavorite(slidingItem: ItemSliding, sessionData: any, title: string) {
      let alert = this.alertCtrl.create({
        title: title,
        message: 'Would you like to remove this session from your favorites?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              // they clicked the cancel button, do not remove the session
              // close the sliding item and hide the option buttons
              slidingItem.close();
            }
          },
          {
            text: 'Remove',
            handler: () => {
              // they want to remove this session from their favorites
              this.user.removeFavorite(sessionData.name);
              this.updateSchedule();
  
              // close the sliding item and hide the option buttons
              slidingItem.close();
            }
          }
        ]
      });
      // now present the alert on top of all other content
      alert.present();
    }
  
    openSocial(network: string, fab: FabContainer) {
      let loading = this.loadingCtrl.create({
        content: `Posting to ${network}`,
        duration: (Math.random() * 1000) + 500
      });
      loading.onWillDismiss(() => {
        fab.close();
      });
      loading.present();
    }
  
    doRefresh(refresher: Refresher) {
      this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
        this.shownSessions = data.shownSessions;
        this.groups = data.groups;
  
        // simulate a network request that would take longer
        // than just pulling from out local json file
        setTimeout(() => {
          refresher.complete();
  
          const toast = this.toastCtrl.create({
            message: 'Sessions have been updated.',
            duration: 3000
          });
          toast.present();
        }, 1000);
      });
    }
  */
    SchedulePage.prototype.itemTapped = function (factura) {
        this.navCtrl.push(FacturaDetailPage, {
            factura: factura
        });
    };
    SchedulePage.prototype.createBill = function () {
        this.navCtrl.push(FacturaCreatePage);
    };
    SchedulePage.prototype.editBill = function () {
        this.navCtrl.push(FacturaEditPage);
    };
    __decorate([
        ViewChild('scheduleList', { read: List }),
        __metadata("design:type", List)
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Component({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/schedule/schedule.html"*/'\n<ion-content>\n  <global-header></global-header>\n\n  <ion-row class="avatar-square">\n    <img src="assets/img/habla-el.gif"/>\n    <div class="message-avatar">¡Hola, este es tu dashboard!</div>\n  </ion-row>\n\n  <ion-row class="btn-factura">\n    <button ion-button icon-only color="danger">  \n      Pendientes\n    </button>\n    <button ion-button icon-only>  \n      Canceladas\n    </button>\n  </ion-row>\n\n  <ion-scroll scrollY="true" class="list-bill">\n    <ion-row sticky ion-item *ngFor="let factura of facturas" class="item-factura">\n        <ion-row class="buton-event">\n          <ion-icon ios="ios-create" md="md-create" (click)="editBill()" ></ion-icon>\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n        </ion-row>\n        <ion-row class="content-factura" (click)="itemTapped(factura)">\n          <ion-row>\n            <b>{{ factura.name }}</b>\n          </ion-row>\n          <ion-row>\n            {{ factura.descripcion }}\n          </ion-row>\n          <ion-row class="price">\n            Q{{ factura.precio }}\n          </ion-row>\n        </ion-row>\n    </ion-row>  \n  </ion-scroll>\n\n  <ion-fab bottom right>\n    <button ion-fab (click)="createBill()">   \n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/schedule/schedule.html"*/,
            providers: [UserService]
        }),
        __metadata("design:paramtypes", [NavController,
            UserService])
    ], SchedulePage);
    return SchedulePage;
}());
export { SchedulePage };
//# sourceMappingURL=schedule.js.map