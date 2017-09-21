import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SuggestedCustomers } from '../../models/SuggestedCustomers';
import { Observable } from 'rxjs/Rx';
import { HttpserveratProvider } from '../../providers/httpserverat/httpserverat';

/*
  Generated class for the ExistingusersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExistingusersProvider {
  loginapiUrl='http://192.168.1.6:8080/AnchorTrackingERPWebService/';
  headers: Headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' });
  //headers: Headers = new Headers({ 'Content-Type': 'application/json'});
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(public http: Http,public httpserverat: HttpserveratProvider) {
    console.log('Hello ExistingusersProvider Provider');
  }

   // Search for github users  
  /* searchexistingCustomers(searchParam: string): Observable<SuggestedCustomers[]> {
    return this.http.get(`${this.loginapiUrl}jobcard/getcustomerjccreationsuggestions?userinput=${searchParam}`,this.options) 
      .map(res => <SuggestedCustomers[]>(res.json().items)
    )
    
    
   }*/

/*searchexistingCustomers(searchParam: string): Observable<SuggestedCustomers[]>  {
  return this.http.get(`${this.loginapiUrl}jobcard/getcustomerjccreationsuggestions?userinput=${searchParam}`,this.options) 
    .map(res => <SuggestedCustomers[]>(res.json().items)
  )
  
}*/

searchexistingCustomers(searchParam: string): Observable<SuggestedCustomers[]> {
  return this.http.get(this.httpserverat.httpserverat+`jobcard/getcustomerjccreationsuggestions?userinput=${searchParam}`,this.options) 
    .map((res : Response) => res.json())
}


 /* searchexistingCustomers(searchParam: string ) {
    return new Promise(resolve => {
      console.log(JSON.parse(JSON.stringify(searchParam)));
      this.http.get(`${this.loginapiUrl}jobcard/getcustomerjccreationsuggestions?userinput=${searchParam}`,this.options)

      .map(res => res.json())
        .subscribe(data => {
          data = data;
          resolve(data);
          console.log(data);
        });
    });
  }*/

}
