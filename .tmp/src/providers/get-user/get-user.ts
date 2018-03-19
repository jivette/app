import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the GetUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetUserProvider {

  proxy: any;

  constructor(public http: HttpClient) {
    this.proxy = /*"/api"*/"https://codificandoideas.org";
  }

  getUser(data): Observable<any> {

    return this.http.post(this.proxy + "/terecuerdo/api/obtenerUsuario", data);
  }


  getSetting(data): Observable<any> {
    return this.http.post(this.proxy + "/terecuerdo/api/editarConfiguracion", data);
  }

}
