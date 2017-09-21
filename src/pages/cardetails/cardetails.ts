import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

/**
 * Generated class for the CardetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardetails',
  templateUrl: 'cardetails.html',
})
export class CardetailsPage {
  private cardetailsformgroup : FormGroup;
  public backgroundImage = 'assets/img/background/old_map.png';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.cardetailsformgroup = this.formBuilder.group({
        cardetailscldet: [],
        cardetailsjcno: [],
        cardetailsregno: ['', Validators.required],
        cardetailsmodl: ['', Validators.required],
        cardetailschas: ['', Validators.required],
        cardetailscol: ['', Validators.required],
        cardetailsloc: ['', Validators.required],
        cardetailsimei: ['', Validators.required],
        cardetailsdevno: ['', Validators.required],
        cardetailsbackupimei: [],
        cardetailsbackupdevno: []
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardetailsPage');
  }

}
