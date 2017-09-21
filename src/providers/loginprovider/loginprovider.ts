import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { PojoUserloginDetails } from '../../models/PojoUserloginDetails';
import {Observable} from 'rxjs/Observable';
import { UserLoginResponse } from '../../models/UserLoginResponse';
import { HttpserveratProvider } from '../../providers/httpserverat/httpserverat';
import { LoginPage } from '../../pages/login/login';



/*
  Generated class for the LoginproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginproviderProvider {
  loginapiUrl='http://192.168.1.6:8080/AnchorTrackingERPWebService/';
  public returneduserdetails : UserLoginResponse;
  //public data : any;
  public  retusername :string;
  public datafs : any;
  public loginpage : LoginPage;
 
  
  //headers : Headers;
  headers: Headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(public http: Http, public httpserverat: HttpserveratProvider) {
    console.log('Hello LoginproviderProvider Provider');

 
  }


  getUser(pojoud : PojoUserloginDetails ) {
    if (pojoud.email === null || pojoud.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
       // console.log(JSON.parse(JSON.stringify(pojoud)));
        this.http.post(this.httpserverat.httpserverat+'userlogin/userlogingetuser',JSON.parse(JSON.stringify(pojoud)),
        this.options).map(res => res.json())
        .timeout(1000)
        .subscribe(dataret => {
          this.datafs=dataret;
         // console.log(this.datafs[0]);
          observer.next(this.datafs);
          observer.complete();
        },error=> {
       // console.log(this.datafs);
        observer.next(this.datafs);
        observer.complete();
      });
       
      });
    }
  }

 
}


