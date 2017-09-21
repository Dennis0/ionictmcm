import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { MainActivityFragmentPage } from '../pages/main-activity-fragment/main-activity-fragment';
import { CardetailsPage } from '../pages/cardetails/cardetails';
import { JobcarddetailsPage } from '../pages/jobcarddetails/jobcarddetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginproviderProvider } from '../providers/loginprovider/loginprovider';
import { HttpModule } from '@angular/http';
import { ExistingusersProvider } from '../providers/existingusers/existingusers';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { ClientsCompleteServiceProvider } from '../providers/clients-complete-service/clients-complete-service';
import { HttpserveratProvider } from '../providers/httpserverat/httpserverat';
import { FinanciertypeProvider } from '../providers/financiertype/financiertype';
import { FinancierProvider } from '../providers/financier/financier';
import { SupplierProvider } from '../providers/supplier/supplier';
import { BranchProvider } from '../providers/branch/branch';
import { BranchlocationProvider } from '../providers/branchlocation/branchlocation';
import { SharedpreferencesdbProvider } from '../providers/sharedpreferencesdb/sharedpreferencesdb';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MainActivityFragmentPage,
    CardetailsPage,
    JobcarddetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    AutoCompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    MainActivityFragmentPage,
    CardetailsPage,
    JobcarddetailsPage
  ],
  providers: [
    StatusBar,
    
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginproviderProvider,
    ExistingusersProvider,
    ClientsCompleteServiceProvider,
    HttpserveratProvider,
    FinanciertypeProvider,
    FinancierProvider,
    SupplierProvider,
    BranchProvider,
    BranchlocationProvider,
    SharedpreferencesdbProvider,
    SQLite
    
  ]
})
export class AppModule {}
