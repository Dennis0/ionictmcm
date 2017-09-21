import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { HttpserveratProvider } from '../../providers/httpserverat/httpserverat';
import { PojoJobcardtype } from '../../models/PojoJobcardtype';


/*
  Generated class for the FinanciertypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FinanciertypeProvider {

  headers: Headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(public http: Http,public httpserverat: HttpserveratProvider) {
    console.log('Hello FinanciertypeProvider Provider');
  }

  load(): Observable<PojoJobcardtype[]> {
    return this.http.get(this.httpserverat.httpserverat+"jobcard/listjobcardtype",this.options)
      .map(res => <PojoJobcardtype[]>res.json())
      
  }

}
