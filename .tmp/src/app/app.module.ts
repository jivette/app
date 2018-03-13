import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { HeaderComponent } from '../components/header/header';
//import { PopoverPage } from '../pages/about-popover/about-popover';
//import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
//import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
//import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
//import { SessionDetailPage } from '../pages/session-detail/session-detail';
//import { SignupPage } from '../pages/signup/signup';
//import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
//import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
//import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
//import { SupportPage } from '../pages/support/support';
import { FacturaDetailPage } from '../pages/factura-detail/factura-detail';
import { FacturaCreatePage } from '../pages/factura-create/factura-create';
import { FacturaEditPage } from '../pages/factura-edit/factura-edit';
import { SettingsPage } from '../pages/settings/settings';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { GooglePlus } from '@ionic-native/google-plus';
import { BillService } from '../providers/bill-service/bill-service';
import { AnimationService, AnimatesDirective } from 'css-animator';
import {IonSimpleWizard} from '../pages/ion-simple-wizard/ion-simple-wizard.component';
import {IonSimpleWizardStep} from '../pages/ion-simple-wizard/ion-simple-wizard.step.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetUserProvider } from '../providers/get-user/get-user';
import { BillCreateProvider } from '../providers/bill-create/bill-create';

import { ModalPageEditPage } from '../pages/modal-page-edit/modal-page-edit';

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    //AccountPage,
    LoginPage,
    //MapPage,
    //PopoverPage,
    SchedulePage,
    //ScheduleFilterPage,
    //SessionDetailPage,
    //SignupPage,
    //SpeakerDetailPage,
    //SpeakerListPage,
    //TabsPage,
    TutorialPage,
    HeaderComponent,
    //SupportPage,
    FacturaDetailPage,
    FacturaCreatePage,
    FacturaEditPage,
    SettingsPage,
    AnimatesDirective,
    IonSimpleWizard,
    IonSimpleWizardStep,
    ModalPageEditPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        //{ component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        //{ component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        //{ component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        //{ component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        //{ component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        //{ component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        //{ component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        //{ component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: FacturaDetailPage, name: 'FacturaDetailPage', segment: 'factura-detail' },
        { component: FacturaCreatePage, name: 'FacturaCreatePage', segment: 'factura-create' },
        { component: FacturaEditPage, name: 'FacturaEditPage', segment: 'factura-edit' },
        { component: SettingsPage, name: 'SettingsPage', segment: 'settings' },
        { component: ModalPageEditPage, name: 'ModalPageEditPage', segment: 'modal-page-edit' },
       // { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    //AccountPage,
    LoginPage,
    //MapPage,
    //PopoverPage,
    SchedulePage,
    //ScheduleFilterPage,
    //SessionDetailPage,
    //SignupPage,
    //SpeakerDetailPage,
    //SpeakerListPage,
    //TabsPage,
    //TutorialPage,
    //SupportPage,
    FacturaDetailPage,
    FacturaCreatePage,
    FacturaEditPage,
    TutorialPage,
    SettingsPage,
    ModalPageEditPage
  ],
  providers: [
    HttpClientModule,
    BillService,
    InAppBrowser,
    SplashScreen,
    GooglePlus,
    ConferenceData,
    UserData,
    AnimationService,
    GetUserProvider,
    BillCreateProvider
  ]
})
export class AppModule { }
