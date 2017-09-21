import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, App, LoadingController, IonicPage, Loading } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginproviderProvider } from '../../providers/loginprovider/loginprovider';
import { PojoUserloginDetails } from '../../models/PojoUserloginDetails';
import { UserLoginResponse } from '../../models/UserLoginResponse';

import { UserLoginResponsenc } from '../../models/UserLoginResponsenc';
import { HomePage } from '../../pages/home/home';
import { SharedpreferencesdbProvider } from '../../providers/sharedpreferencesdb/sharedpreferencesdb';
import { JsonObject, JsonProperty, JsonConvert } from "json2typescript";
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SharedPrefsdb } from '../../models/SharedPrefsdb';

/**
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public backgroundImage = 'assets/img/background/background-5.jpg';
  private loginformgroup: FormGroup;
  private pojoUserloginDetails: PojoUserloginDetails;
  private uemail;
  private upass;
  public returnedjson: string;
  loading: Loading;
  public datafsret: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public platform: Platform,
    public sharedprefsdbctr: SharedpreferencesdbProvider, 
    public formBuilder: FormBuilder, public loginProv: LoginproviderProvider) {
     
     platform.ready().then(() => {
      this.retfromcheck();
    //  console.log(this.sharedprefsdbctr.getallsharedpreference().spid.toString().trim());
       /* if (this.sharedprefsdbctr.getallsharedpreference().spid.toString().trim()!=='nothing') {
          this.navCtrl.setRoot(HomePage);
        }*/
        });
      
    
          this.loginformgroup = this.formBuilder.group({
            loginusernametxtcntr: ['', Validators.required],
            loginpasswordtxtcntr: ['', Validators.required],
          });
  }

  public retfromcheck(){
    this.sharedprefsdbctr.getsharedprefsobs().subscribe(dataretfromobs => {
    let retdfrgetshpref: SharedPrefsdb=dataretfromobs;
    if(retdfrgetshpref.spusername.toString().trim().length>0){
      console.log(retdfrgetshpref.spusername.toString().trim());
      if(retdfrgetshpref.spusername.toString().trim()!=='nothing'){
        this.navCtrl.setRoot(HomePage);
      }
    }
   // 
    });
  }

  public logForm() {
    this.showLoading()
    this.loginProv.getUser(new PojoUserloginDetails(this.loginformgroup.get('loginusernametxtcntr').value,
      this.loginformgroup.get('loginpasswordtxtcntr').value, "ionic")).subscribe(datafs => {
        this.datafsret = datafs;
        if (this.datafsret === undefined) {
          this.showError('An error Occurred');
        } else {
          if (this.datafsret[0].tologinforionic === 'no') {
            this.showError('Invalid Credentials');
          } else if (this.datafsret[0].tologinforionic === 'yes') {
            let userloginres: UserLoginResponsenc =new UserLoginResponsenc(this.datafsret[0].message,
              this.datafsret[0].pasword,
              this.datafsret[0].username,
              this.datafsret[0].usertype,
              this.datafsret[0].userid,
              this.datafsret[0].employeeid,
              this.datafsret[0].userrole,
              this.datafsret[0].error);
             // console.log (userloginres); 
            /*let jsonObjfserver: object = JSON.parse(this.datafsret[0].toString());
            let jsonConvert: JsonConvert = new JsonConvert();
            let userloginres: UserLoginResponsenc = jsonConvert.deserializeObject(jsonObjfserver, UserLoginResponsenc);*/
           
            console.log ("bornobject "+userloginres.pasword);
            console.log ("bornobjecttwo "+userloginres.username);
            
           if (this.sharedprefsdbctr.addsharedpreference(userloginres) === 'true') {
              this.navCtrl.setRoot(HomePage);
            } else {
              this.showError('Error creating session');
            } 
          }
        }

      },
      error => {
        this.showError(error);
      });
  }


  public showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  public showloginerror(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Login Failed',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
