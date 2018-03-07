import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturaDetailPage } from './factura-detail';

@NgModule({
  declarations: [
    FacturaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturaDetailPage),
  ],
})
export class FacturaDetailPageModule {}
