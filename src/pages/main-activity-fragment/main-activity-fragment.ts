import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

/**
 * Generated class for the MainActivityFragmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-activity-fragment',
  templateUrl: 'main-activity-fragment.html',
})
export class MainActivityFragmentPage {
  private mainactivityformgroup : FormGroup;
  public backgroundImage = 'assets/img/background/old_map.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder) {
      this.mainactivityformgroup = this.formBuilder.group({
        mainactivityfjc: ['', Validators.required],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainActivityFragmentPage');
  }

}
