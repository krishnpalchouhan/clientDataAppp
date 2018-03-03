import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { DataService } from '../../services/data.service';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  posts:Post[];
  result:any;
  fromData:FromData;

  constructor(public navCtrl: NavController ,private iab: InAppBrowser,private dataService:DataService,private restService: RestService  ) {

  //this.google();
  let k = new Date();
  this.fromData = {
    dob :"",
    name:"Krishnpal singh chouhan",
    mobile:"8818818886",
    occupation:"job",
    collection:"",
    fabric:"",
    staff:"",
    city:"indore",
    gender:"female",
    rgb:"r",
    doj:k+""
    }

  //this.getData();

  }

  google(){
    const browser = this.iab.create('http://18.218.8.160/','_self','fullscreen=yes,zoom=no,location=no');
    browser.show();
  }

  getData() {
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts=posts;
    });
  }
  save(rgb){
    this.fromData.rgb=rgb;
   try{
    this.restService.saveData(this.fromData).subscribe(
      res=>{
        this.result = res['msg'];
        this.restService.loderShow(false);
        console.log(this.result);
      },
      error => {
        this.result = error['message'];
        this.restService.loderShow(false);
        console.log(this.result);
      }
    )
   }catch(ex){

   }

  }



}
interface Post{
  id: number,
  title:string,
  body:string,
  UserId:number
}
interface FromData{
  mobile: string,
  name: string,
  gender: string,
  dob: string,
  rgb: string,
  city: string,
  doj: string,
  occupation: string,
  collection: string,
  fabric: string,
  staff: string
}
