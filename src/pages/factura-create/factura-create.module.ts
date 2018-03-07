import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturaCreatePage } from './factura-create';

@NgModule({
  declarations: [
    FacturaCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(FacturaCreatePage),
  ],
})
export class FacturaCreatePageModule {}
