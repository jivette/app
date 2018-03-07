var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { GooglePlus } from '@ionic-native/google-plus';
import { UserService } from '../providers/user-service/user-service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                FacturaEditPage
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                HttpModule,
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
                TutorialPage
            ],
            providers: [
                HttpClientModule,
                UserService,
                InAppBrowser,
                SplashScreen,
                GooglePlus,
                ConferenceData,
                UserData
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map