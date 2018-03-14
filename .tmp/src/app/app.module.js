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
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { FacturaDetailPage } from '../pages/factura-detail/factura-detail';
import { FacturaCreatePage } from '../pages/factura-create/factura-create';
import { FacturaEditPage } from '../pages/factura-edit/factura-edit';
import { SettingsPage } from '../pages/settings/settings';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { GooglePlus } from '@ionic-native/google-plus';
import { BillService } from '../providers/bill-service/bill-service';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { IonSimpleWizard } from '../pages/ion-simple-wizard/ion-simple-wizard.component';
import { IonSimpleWizardStep } from '../pages/ion-simple-wizard/ion-simple-wizard.step.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetUserProvider } from '../providers/get-user/get-user';
import { BillCreateProvider } from '../providers/bill-create/bill-create';
import { ModalPageEditPage } from '../pages/modal-page-edit/modal-page-edit';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                ConferenceApp,
                AboutPage,
                LoginPage,
                SchedulePage,
                TutorialPage,
                HeaderComponent,
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
                        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
                        { component: AboutPage, name: 'About', segment: 'about' },
                        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
                        { component: LoginPage, name: 'LoginPage', segment: 'login' },
                        { component: FacturaDetailPage, name: 'FacturaDetailPage', segment: 'factura-detail' },
                        { component: FacturaCreatePage, name: 'FacturaCreatePage', segment: 'factura-create' },
                        { component: FacturaEditPage, name: 'FacturaEditPage', segment: 'factura-edit' },
                        { component: SettingsPage, name: 'SettingsPage', segment: 'settings' },
                        { component: ModalPageEditPage, name: 'ModalPageEditPage', segment: 'modal-page-edit' }
                    ]
                }),
                IonicStorageModule.forRoot()
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                ConferenceApp,
                AboutPage,
                LoginPage,
                SchedulePage,
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map