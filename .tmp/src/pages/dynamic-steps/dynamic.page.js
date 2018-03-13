var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Content } from 'ionic-angular/umd';
import { Component } from '@angular/core';
import { NavController, AlertController, Events } from 'ionic-angular';
var DynamicPage = (function () {
    function DynamicPage(navCtrl, alertCtrl, evts) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.evts = evts;
        this.stepsArray = [];
        /**
         * Step Wizard Settings
         */
        this.step = 1; //The value of the first step, always 1
        this.stepCondition = false; //For each step the condition is set to this value, Set to true if you don't need condition in every step
        this.stepDefaultCondition = this.stepCondition; //Save the default condition for each step
        //Let's create some dummy data for this case
        this.stepsArray =
            [
                {
                    title: 'Step 1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    title: 'Step 2',
                    content: 'At dolorem sed, porro amet corrupti consequatur dolore ea sequi similique maxime!'
                },
                {
                    title: 'Step 3',
                    content: 'Tempora eveniet nostrum asperiores vero facere voluptatum adipisci minus magnam.'
                }
            ];
        //You can subscribe to the Event 'step:changed' to handle the current step
        this.evts.subscribe('step:changed', function (step) {
            //Handle the current step if you need
            _this.currentStep = step[0];
            //Set the step condition to the default value
            _this.stepCondition = _this.stepDefaultCondition;
        });
        this.evts.subscribe('step:next', function () {
            //Do something if next
            console.log('Next pressed: ', _this.currentStep);
        });
        this.evts.subscribe('step:back', function () {
            //Do something if back
            console.log('Back pressed: ', _this.currentStep);
        });
    }
    /**
     * Demo functions
     */
    DynamicPage.prototype.onFinish = function () {
        this.alertCtrl.create({
            message: 'Wizard Finished!!',
            title: 'Congrats!!',
            buttons: [{
                    text: 'Ok'
                }]
        }).present();
    };
    DynamicPage.prototype.toggleCondition = function (_condition) {
        this.stepCondition = _condition.checked;
    };
    DynamicPage = __decorate([
        Component({
            selector: 'dynamic-home',template:/*ion-inline-start:"/home/ivette/Documents/app/src/pages/dynamic-steps/dynamic.page.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Dynamic Example\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-simple-wizard [(step)]="step" [showSteps]="true" (finish)="onFinish()" [finishIcon]="\'done-all\'" [(stepCondition)]="stepCondition">\n        <ion-wizard-step *ngFor="let step of stepsArray">\n            <ion-card>\n                <ion-card-header>\n                    {{step.title}}\n                </ion-card-header>\n                <ion-card-content>\n                    {{step.content}}\n                    <ion-item>\n                        <ion-label>Next Condition</ion-label>\n                        <ion-toggle (ionChange)="toggleCondition($event)" [(ngModel)]="stepCondition"></ion-toggle>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </ion-wizard-step>\n\n    </ion-simple-wizard>\n\n\n</ion-content>'/*ion-inline-end:"/home/ivette/Documents/app/src/pages/dynamic-steps/dynamic.page.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, AlertController, Events])
    ], DynamicPage);
    return DynamicPage;
}());
export { DynamicPage };
//# sourceMappingURL=dynamic.page.js.map