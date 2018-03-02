import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  Date: string;
  mobile:string;
  job:string;
  busines:string;
  collection:string;
  fabric:string;
  staff:string;
  name:string;
  city:string;

  constructor(public navCtrl: NavController ,private iab: InAppBrowser  ) {

  //this.google();
  this.Date="";
  this.name="Krishnpal singh chouhan";
  this.mobile="8818818886";
  this.job="job";
  this.busines="";
  this.collection="";
  this.fabric="";
  this.staff="";
  this.city="indore";
  }
  google(){
    const browser = this.iab.create('http://18.218.8.160/','_self','fullscreen=yes,zoom=no,location=no');
    browser.show();
      }


}
