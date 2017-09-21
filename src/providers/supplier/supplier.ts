import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpserveratProvider } from '../../providers/httpserverat/httpserverat';
import {AutoCompleteService} from 'ionic2-auto-complete';

/*
  Generated class for the SupplierProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SupplierProvider implements AutoCompleteService {
  labelAttribute = "suppliercompany";
  headers: Headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(public http: Http,public httpserverat: HttpserveratProvider) {
    console.log('Hello SupplierProvider Provider');
  }

  getResults(keyword:string) {
    return this.http.get(this.httpserverat.httpserverat+"jobcard/getsuppliersjccreationsuggestion?userinput="+keyword,this.options)
      .map(
        result =>
        {
          return result.json()
         
            .filter(item => item.suppliercompany.toLowerCase().startsWith(keyword.toLowerCase()) )
            
        });
  }

}
