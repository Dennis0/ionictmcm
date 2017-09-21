import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';
import { UserLoginResponse } from '../../models/UserLoginResponse';
import { UserLoginResponsenc } from '../../models/UserLoginResponsenc';
import { SharedPrefsdb } from '../../models/SharedPrefsdb';
import {Observable} from 'rxjs/Observable';



/*
  Generated class for the SharedpreferencesdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedpreferencesdbProvider {

  /* SHAREDPREFSDBNAME: string='trailmycarpreferences.db';
  SHAREDPREFSDBUID: string = 'spid';
  SHAREDPREFSDBUSERNAME: string = 'spusername'
  SHAREDPREFSDBPASS: string = 'sppassword'
  SHAREDPREFSDBUTY: string = 'spusertype'
  SHAREDPREFSDBEMPID: string = 'spemployeeid'*/

  public dbtouse :SQLiteObject;


  constructor(public http: Http,
    public shprsqlite: SQLite,
    public platform: Platform) {
   // platform.ready().then(() => {
      this.shprsqlite.create({
        name : "trailmycarpreferences.db",
        location: "default"
      }).then((db: SQLiteObject ) => {
        this.dbtouse=db;
        console.log("at constructor "+ this.dbtouse);
        db.executeSql("CREATE TABLE IF NOT EXISTS trailmycarpreferences (id INTEGER PRIMARY KEY , \
           spid VARCHAR,\
            spusername VARCHAR,\
             sppassword VARCHAR,\
              spusertype VARCHAR,\
               spemployeeid VARCHAR)",


         {}).then((data) => {
          console.log("TABLE trailmycarpreferences CREATED: ", data);
        }, (error) => {
          console.error("Unable to execute trailmycarpreferences sql", error);
        })
      }, (error) => {
        console.error("Unable to open trailmycarpreferences database", error);
    });
  //  });
    console.log('Hello SharedpreferencesdbProvider Provider');
  }

  public addsharedpreference(userloginres : UserLoginResponsenc) :string {
    console.log("adding sharedpreference");
    console.log(userloginres);
   let ifsharedprefsinserted: string='false'
   
    
   /* let qry:string ="INSERT INTO trailmycarpreferences (id,spid,spusername,sppassword,spusertype,spemployeeid) VALUES \
    ("+userloginres.userid+",\
    '"+userloginres.userid.toString()+"',\
    '"+userloginres.username+"',\
    '"+userloginres.pasword+"',\
    '"+userloginres.usertype+"',\
   '"+userloginres.employeeid.toString()+"')"*/

   let qry:string ="INSERT INTO trailmycarpreferences (id,spid,spusername,sppassword,spusertype,spemployeeid) VALUES \
   ("+userloginres.userid+",'"+userloginres.userid.toString()+"','"+userloginres.username+"','"+userloginres.pasword+"','"+userloginres.usertype+"','"+userloginres.employeeid.toString()+"')";

    console.log(qry);
    this.dbtouse.executeSql(qry,[]).then((data) => {
        console.log("INSERTED trailmycarpreferences: " + JSON.stringify(data));
         ifsharedprefsinserted='true';
    }, (error) => {
       
        console.log("ERROR INSERTing: " + JSON.stringify(error.error));
        console.log("ERROR INSERTing: " + userloginres);
        ifsharedprefsinserted='false';
    });
    console.log(ifsharedprefsinserted);
    return  ifsharedprefsinserted;
   
  }

 
  public getallsharedpreference(): SharedPrefsdb {
      let sharedprefsdbvals : SharedPrefsdb =new SharedPrefsdb ("nothing","nothing","nothing","nothing","nothing","nothing");
      console.log("at getallsharedpreference "+ this.dbtouse);
        this.dbtouse.executeSql("SELECT id,spid,spusername,sppassword,spusertype,spemployeeid FROM \
        trailmycarpreferences ORDER BY id DESC LIMIT 1 ",[]).then((dataret) => {
          console.log("SELECTED trailmycarpreferences: " + JSON.stringify(dataret));
               let data: any=dataret;
          //if (data.length.res.rows.length > 0) {
            if (dataret.rows.length > 0) {
            sharedprefsdbvals =new SharedPrefsdb (data.rows.item(0).id.toString(),
            data.rows.item(0).spid,
            data.rows.item(0).spusername,
            data.rows.item(0).sppassword,
            data.rows.item(0).spusertype,
            data.rows.item(0).spemployeeid);
            console.log( data.rows.item(0).id);
            console.log( sharedprefsdbvals);
        }
      }, (error) => {
        sharedprefsdbvals =new SharedPrefsdb ("nothing","nothing","nothing","nothing","nothing","nothing");
          console.log("ERROR SELECTED trailmycarpreferences: " + JSON.stringify(error.err));
      });
      return  sharedprefsdbvals;
     }

 public getsharedprefsobs() : Observable<any> {
    let  qry: string="SELECT id,spid,spusername,sppassword,spusertype,spemployeeid FROM \
      trailmycarpreferences ORDER BY id DESC LIMIT 1 ";
      console.log("at getallsharedpreference "+ this.dbtouse);
      
        return Observable.create(observer => {
          let sharedprefsdbvals : SharedPrefsdb =new SharedPrefsdb ("nothing","nothing","nothing","nothing","nothing","nothing");
          this.dbtouse.executeSql(qry,[]).then((dataret) => {
            let data: any=dataret;
              if (dataret.rows.length > 0) {
              sharedprefsdbvals =new SharedPrefsdb (data.rows.item(0).id.toString(),
              data.rows.item(0).spid,
              data.rows.item(0).spusername,
              data.rows.item(0).sppassword,
              data.rows.item(0).spusertype,
              data.rows.item(0).spemployeeid);
              console.log( data.rows.item(0).id);
              console.log( sharedprefsdbvals);

              observer.next(sharedprefsdbvals);
              observer.complete();
              }
          }, (error) => {
            sharedprefsdbvals =new SharedPrefsdb ("nothing","nothing","nothing","nothing","nothing","nothing");
            console.log("ERROR SELECTED trailmycarpreferences: " + JSON.stringify(error.err));

            observer.next(sharedprefsdbvals);
            observer.complete();
          })
         
        });
      
    }

  public deleteallsharedpreference() {
    this.dbtouse.executeSql("DROP TABLE IF EXISTS trailmycarpreferences",[]);
  }

}
