var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { Events } from 'ionic-angular';
import { WizardAnimations } from './ion-simple-wizard-animations';
var IonSimpleWizard = (function () {
    function IonSimpleWizard(evts, keyboard) {
        this.evts = evts;
        this.keyboard = keyboard;
        this.finishIcon = 'send'; //Default
        this.showSteps = true; //Default
        this.step = 1; //Default
        this.finish = new EventEmitter();
        this.stepChange = new EventEmitter();
        this.steps = 0; //Innitial
        this.hideWizard = false; //Default
        this.stepCondition = true; //Default
    }
    IonSimpleWizard.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Hide the wizard buttons when the keyboard is open
         */
        /**
         * Hide the wizard buttons when the keyboard is open
         */
        this.keyboard.onKeyboardShow().subscribe(function () {
            _this.hideWizard = true;
        });
        this.keyboard.onKeyboardHide().subscribe(function () {
            _this.hideWizard = false;
        });
    };
    /**
     * @return {number} New Steps
     */
    IonSimpleWizard.prototype.addStep = function () {
        var newSteps = this.steps + 1;
        this.steps = newSteps;
        return newSteps;
    };
    /**
     * @return {boolean} true if is the final step
     */
    IonSimpleWizard.prototype.isOnFinalStep = function () {
        return this.step === this.steps;
    };
    /**
     * @return {boolean} the current step condition
     */
    IonSimpleWizard.prototype.getCondition = function () {
        return this.stepCondition;
    };
    /**
     * @return {boolean} true if the the step is the first
     */
    IonSimpleWizard.prototype.isOnFirstStep = function () {
        return this.step === 1;
    };
    /**
     * @method back button event and emit Event Called 'step:back'
     */
    IonSimpleWizard.prototype.back = function () {
        this.stepChange.emit(this.step - 1);
        this.evts.publish('step:back');
    };
    /**
     * @method next button event and emit  Event Called 'step:next'
     */
    IonSimpleWizard.prototype.next = function () {
        this.stepChange.emit(this.step + 1);
        this.evts.publish('step:next');
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "finishIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], IonSimpleWizard.prototype, "showSteps", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "step", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "finish", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "stepChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "stepCondition", void 0);
    IonSimpleWizard = __decorate([
        Component({
            selector: 'ion-simple-wizard',template:/*ion-inline-start:"/home/ivette/Documentos/alex/app/src/components/ion-simple-wizard/ion-simple-wizard.component.html"*/'<ng-content></ng-content>\n<ion-footer [hidden]="hideWizard">\n  <div class="ion-wizard-footer">\n    <!--Back Button-->\n    <ion-fab [@btnState] *ngIf="!isOnFirstStep()" left bottom>\n      <button ion-fab (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-fab>\n    <!--Steps count-->   \n    <ion-badge *ngIf="showSteps">{{step}} / {{steps}}</ion-badge>\n    <!--Next Button-->\n    <ion-fab [@btnState] *ngIf="(!isOnFinalStep() && getCondition())" right bottom>\n      <button ion-fab (click)="next()">\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </ion-fab>\n    <!--Finish Button-->\n    <ion-fab [@btnState] *ngIf="(isOnFinalStep() && getCondition())" right bottom>\n      <button ion-fab (click)="finish.emit(step + 1)">\n        <ion-icon [name]="finishIcon"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n</ion-footer>'/*ion-inline-end:"/home/ivette/Documentos/alex/app/src/components/ion-simple-wizard/ion-simple-wizard.component.html"*/,
            animations: WizardAnimations.btnRotate
        }),
        __metadata("design:paramtypes", [Events, Keyboard])
    ], IonSimpleWizard);
    return IonSimpleWizard;
}());
export { IonSimpleWizard };
//# sourceMappingURL=ion-simple-wizard.component.js.map