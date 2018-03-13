import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPageEditPage } from './modal-page-edit';

@NgModule({
  declarations: [
    ModalPageEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPageEditPage),
  ],
})
export class ModalPageEditPageModule {}
