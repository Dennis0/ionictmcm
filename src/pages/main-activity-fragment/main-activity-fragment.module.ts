import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainActivityFragmentPage } from './main-activity-fragment';

@NgModule({
  declarations: [
    MainActivityFragmentPage,
  ],
  imports: [
    IonicPageModule.forChild(MainActivityFragmentPage),
  ],
})
export class MainActivityFragmentPageModule {}
