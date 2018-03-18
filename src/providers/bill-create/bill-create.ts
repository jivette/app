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

  constructor(public http: HttpClient) {
  }

  getProveedor(): Observable<any> {
    return this.http.post("api/terecuerdo/api/proveedores","");
  }
  createBill(data): Observable<any> {
    return this.http.post("api/terecuerdo/api/create_factura",data);
  }
  updateBill(data): Observable<any> {
    return this.http.post("api/terecuerdo/api/actualizar_factura", data);
  }
  refreshStatus(factura): Observable<any> {
    return this.http.post("api/terecuerdo/api/cambiar_estado", factura);
  }
}
