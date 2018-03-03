import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
//import { stringify } from 'querystring';
import 'rxjs/add/operator/map';
//import {} from 'jasmine';

@Injectable()
export class RestService {
  result: any;
  base_url:string;
  error:any;
  constructor(private http: HttpClient) {

    this.base_url = "http://18.218.8.160/api/v1/";
  }
  loderShow(isShow){
    if(isShow){
     // document.getElementById("load").style.visibility = "visible";
    }else{
      //document.getElementById("load").style.visibility = "hidden";
    }
  };
  saveData(data) {
    const uri = this.base_url+'client';
    if(data.email=''){
      data.email="no@Email.com"
    }
    const obj =JSON.stringify({

      "mobile": data.mobile,
      "name": data.name,
      "gender": data.gender,
      "dob": data.dob,
      "rgb": data.rgb,
      "city": data.city,
      "doj": data.doj,
      "occupation": data.occupation,
      "collection": data.collection,
      "fabric": data.fabric,
      "staff": data.staff
    });

   //debugger;

    return this.http.post(uri, obj)
        .map(res => {
         // console.log(res);
          return res;
        },
        error => {
          this.error = error;
         // console.log(error);
          return error;
        } // error path
      );

  }

  loginUser(data) {
    const uri = this.base_url+'user';

    const obj =JSON.stringify({
      "str_Email": data.username,
      "str_Password": data.password
    });



   //debugger;

    return this.http.post(uri, obj)
        .map(res => {
         // console.log(res);

          return res;
        },
        error => {
          this.error = error;
         // console.log(error);

          return error;
        } // error path
      );

  }
  deleteData(id) {
    const uri = this.base_url+'user/delete';
    const obj =JSON.stringify({
      "sn": id
    });
   //debugger;

   return  this.http.post(uri, obj)
    .map(res => {
      return res;
    });
  /*.subscribe(res => {
          console.log(res);
          return res;//this.getCoins();
        });*/

  }

  getCoins() {
   const uri = this.base_url+'user/cst/';;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });

  }

  editCoin(id) {
    const uri = this.base_url+'user'; + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
  updateCoin(name, price, id) {
    const uri = this.base_url+'user/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .put(uri, obj)
      .subscribe(res => console.log('Done'));
  }

}
