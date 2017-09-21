import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { HttpserveratProvider } from '../../providers/httpserverat/httpserverat';
import { Brancheswithids } from '../../models/Brancheswithids';

/*
  Generated class for the BranchlocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BranchlocationProvider {
  headers: Headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(public http: Http,public httpserverat: HttpserveratProvider) {
    console.log('Hello BranchlocationProvider Provider');
  }

  load(): Observable<Brancheswithids[]> {
    return this.http.get(this.httpserverat.httpserverat+"jobcard/getjccreationbranches",this.options)
      .map(res => <Brancheswithids[]>res.json())
      
  }

}
