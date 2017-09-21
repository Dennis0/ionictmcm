import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpserveratProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpserveratProvider {
  httpserverat='http://139.162.161.116:8080/AnchorTrackingERPWebServicesuppionic/';
 // httpserverat='http://139.162.161.116:8080/AnchorTrackingERPWebService/';
 // httpserverat='http://192.168.1.6:8080/AnchorTrackingERPWebService/';
  constructor(public http: Http) {
    console.log('Hello HttpserveratProvider Provider');
  }
  getserverat() {
    return this.httpserverat;
  }

}
