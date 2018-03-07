import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturaEditPage } from './factura-edit';

@NgModule({
  declarations: [
    FacturaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturaEditPage),
  ],
})
export class FacturaEditPageModule {}
