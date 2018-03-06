import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(public http: HttpClient, public storage: Storage) {
  }

  getUsers() {
    //return this.http.get('http://codificandoideas.org/recuerdame/api/facturas');
 
    let postParams = { userId: 56156165 };
    
    this.http.post("http://codificandoideas.org/recuerdame/api/facturas", JSON.stringify(postParams)).map((response: Response) => {
      return response; 
    });
  }
}
