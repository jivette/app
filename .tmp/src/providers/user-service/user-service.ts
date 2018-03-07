import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { Constant } from '../constants';
//import * as Constant from '../constants';


//import { Storage } from '@ionic/storage';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }

  getUsers(userId: number): Observable<any> {
    //return this.http.get('http://codificandoideas.org/recuerdame/api/facturas');
 
    let postParams = { userId: userId };
    
    return this.http.post("recuerdame/api/facturas", JSON.stringify(postParams)).map((response: Response) => response.json());
  }
}
 