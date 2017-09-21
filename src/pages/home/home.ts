import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import * as moment from 'moment';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private homedashformgroup : FormGroup;
  public backgroundImage = 'assets/img/background/old_map.png';
  //todaysdate = new Date();
  //public todayd=this.todaysdate.getFullYear() + '-' + ('0' + (this.todaysdate.getMonth() + 1)).slice(-2) + '-' + ('0' + this.todaysdate.getDate()).slice(-2);
 // console.log(todayd);
  // todayd= new Date();
  todayd =moment().format('DD/MMM/YYYY');
  

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder) {
      this.homedashformgroup = this.formBuilder.group({
        homedfrmjcpen: ['', Validators.required],
        homedfrmjcap: ['',Validators.required], 
        homedfrmjcinst: ['', Validators.required],
        homedfrmtrpen: ['',Validators.required], 
        homedfrmtrappr: ['', Validators.required],
        hometxtfrdate: ['', Validators.required],
        hometxttodate: ['', Validators.required],
        
         
       });

  }

}
