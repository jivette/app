import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the BillCreateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BillCreateProvider {

  proxy:any;

  constructor(public http: HttpClient) {
    this.proxy = /*"/api"*/"https://codificandoideas.org";
  }

  getProveedor(): Observable<any> {
    return this.http.post(this.proxy + "/terecuerdo/api/proveedores","");
  }
  createBill(data): Observable<any> {
    return this.http.post(this.proxy + "/terecuerdo/api/create_factura",data);
  }
  updateBill(data): Observable<any> {
    return this.http.post(this.proxy + "/terecuerdo/api/actualizar_factura", data);
  }
  refreshStatus(factura): Observable<any> {
    return this.http.post(this.proxy + "/terecuerdo/api/cambiar_estado", factura);
  }
  deleteBill(deletebillObject): Observable<any> {
    return this.http.post(this.proxy + "/terecuerdo/api/cambiar_estado", deletebillObject);
  }
}
