import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SuggestedCustomers } from '../../models/SuggestedCustomers';

import { ExistingusersProvider } from '../../providers/existingusers/existingusers';
import { ClientsCompleteServiceProvider } from '../../providers/clients-complete-service/clients-complete-service';
import { FinancierProvider } from '../../providers/financier/financier';
import { SupplierProvider } from '../../providers/supplier/supplier';
import { FinanciertypeProvider } from '../../providers/financiertype/financiertype';
import { BranchlocationProvider } from '../../providers/branchlocation/branchlocation';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { PojoJobcardtype } from '../../models/PojoJobcardtype';
import { Brancheswithids } from '../../models/Brancheswithids';
import { ChangeDetectorRef } from '@angular/core';

/**
 * Generated class for the JobcarddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobcarddetails',
  templateUrl: 'jobcarddetails.html',
})
export class JobcarddetailsPage {
  suggcustomers: SuggestedCustomers[];
  originalcustomers: SuggestedCustomers[];
  private jcdetailsformgroup: FormGroup;
  public backgroundImage = 'assets/img/background/old_map.png';

  financiertypes: any;
  installationbranches: any;
  clienttypes: any;
  ftyvalue: any;
  customertypevalue: any;
  public iftoshownewclcr: any;
  public iftoshownewclcrext: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public completeTestService: ClientsCompleteServiceProvider,
    public completeFinancierService: FinancierProvider,
    public completeSupplierService: SupplierProvider,
    public formBuilder: FormBuilder,
    private ref: ChangeDetectorRef,
    public financiertypeprovider: FinanciertypeProvider,
    public branchlocprovider: BranchlocationProvider,
    private existingcustomersprov: ExistingusersProvider) {

    this.getfinanciertypes();
    this.getinstallationbranches();
    this.getclienttypes();



    console.log(this.customertypevalue);

    this.jcdetailsformgroup = this.formBuilder.group({
      jcdetailsctype: ['', Validators.required],
      jcdetailscname: ['', Validators.required],
      jcdetailscphone: ['', Validators.required],
      jcdetailscnamea: ['', Validators.required],
      jcdetailscphonea: ['', Validators.required],
      jcdetailsccharges: ['', Validators.required],
      jcdetailsfnanty: ['', Validators.required],
      jcdetailsfnan: ['', Validators.required],
      jcdetailssuppname: ['', Validators.required],
      jcdetailssuppphone: ['', Validators.required],
      jcdetailssuppcharges: ['', Validators.required],
      jcdetailsregno: ['', Validators.required],
      jcdetailsmodel: ['', Validators.required],
      jcdetailschasis: ['', Validators.required],
      jcdetailseng: ['', Validators.required],
      jcdetailscol: ['', Validators.required],
      jcdetailslocation: ['', Validators.required],
      jcdetailsinslocdetbranch: ['', Validators.required],

    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobcarddetailsPage');
  }

  searchexistingclients(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.suggcustomers = this.originalcustomers;
    } else {
      // Get the searched users from github
      this.existingcustomersprov.searchexistingCustomers(term).subscribe(suggcus => {
        this.suggcustomers = suggcus
        console.log(suggcus);
      });
    }
  }



  getfinanciertypes() {
    this.financiertypeprovider.load().subscribe(financiertypesfs => {
      this.financiertypes = financiertypesfs;
      console.log(financiertypesfs);
      console.log(this.financiertypes);
    })
  }

  getinstallationbranches() {
    this.branchlocprovider.load().subscribe(installationbranchesfs => {
      this.installationbranches = installationbranchesfs;
      console.log(installationbranchesfs);
      console.log(this.installationbranches);
    })
  }

  getclienttypes() {
    this.clienttypes = [{ "ctyval": "1", "ctydesc": "New" }, { "ctyval": "2", "ctydesc": "Existing" }];
  }

  onftyChange(jcdetailsfnanty) {
    if (this.jcdetailsformgroup.get('jcdetailsfnanty').value === 'Bank') {
      this.ftyvalue = 'Bank';
    }
    else
      this.ftyvalue = '';
  }

  onCustomertypechanf(jcdetailsctype) {
    /* this.customertypevalue=this.jcdetailsformgroup.get('jcdetailsctype').value;
       console.log(this.customertypevalue); */
    if (this.customertypevalue = this.jcdetailsformgroup.get('jcdetailsctype').value === '2') {
      this.iftoshownewclcr = false;
      this.iftoshownewclcrext = true;
      console.log(this.iftoshownewclcr);
      this.ref.detectChanges();
    }
    else {
      this.iftoshownewclcr = true;
      this.iftoshownewclcrext = false;
      console.log(this.iftoshownewclcr);
      this.ref.detectChanges();
    }
  }




}
