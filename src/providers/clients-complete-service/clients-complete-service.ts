import {AutoCompleteService} from 'ionic2-auto-complete';
import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpserveratProvider } from '../../providers/httpserverat/httpserverat';

/*
  Generated class for the ClientsCompleteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientsCompleteServiceProvider implements AutoCompleteService {
  labelAttribute = "customername";

  headers: Headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' });
  //headers: Headers = new Headers({ 'Content-Type': 'application/json'});
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(public http: Http,public httpserverat: HttpserveratProvider) {
    console.log('Hello ClientsCompleteServiceProvider Provider');
  }

  getResults(keyword:string) {
    return this.http.get(this.httpserverat.httpserverat+"jobcard/getcustomerjccreationsuggestions?userinput="+keyword,this.options)
      .map(
        result =>
        {
          return result.json()
         
            .filter(item => item.customername.toLowerCase().startsWith(keyword.toLowerCase()) )
            
        });
  }

}
