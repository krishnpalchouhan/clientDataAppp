import { Component, OnInit } from '@angular/core';
import { Body } from '@angular/http/src/body';
let rating_suggestion = 0;
let rating_quality = 0;
let rating_service = 0;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerInfo: RegisterCustome;
  constructor() { }

  ngOnInit() {
    this.customerInfo = {
      name :  '',
      mobile :  '',
      email :  '',
      city :  '',
      rating_service: 5,
      rating_quality: 5,
      rating_suggestion: 5
    };
// code for star rating

function StarRating() {
  this.init();
};

/**
 * Initialize
 */
var starsk;
StarRating.prototype.init = function() {
  starsk = document.querySelectorAll('#rating span');
  for (var i = 0; i < starsk.length; i++) {
    starsk[i].setAttribute('data-count', i);
    starsk[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
  }
  document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
};

/**
 * This method is fired when a user hovers over a single star
 * @param e
 */
StarRating.prototype.enterStarListener = function(e) {
  this.fillStarsUpToElement(e.target);
};

/**
 * This method is fired when the user leaves the #rating element, effectively removing all hover states.
 */
StarRating.prototype.leaveStarListener = function() {
  rating_suggestion = 0;
  for(let i=0; i<starsk.length;i++){
    //console.log(starsk[i]);
    debugger;
    if(starsk[i].className=="fa fa-star hover"){
      rating_suggestion =rating_suggestion + 1;

    }else{
      i=100;
    }
    //debugger;
  }

  console.log(rating_suggestion);
};

/**
 * Fill the star ratings up to a specific position.
 * @param el
 */
StarRating.prototype.fillStarsUpToElement = function(el) {
  // Remove all hover states:
  for (var i = 0; i < starsk.length; i++) {
    if (el == null || starsk[i].getAttribute('data-count') > el.getAttribute('data-count')) {
      starsk[i].classList.remove('hover');
    } else {
      starsk[i].classList.add('hover');
    }
  }
};

// Run:
new StarRating();


//
// code for star rating

function StarRating2() {
  this.init1();
};

/**
 * Initialize
 */
var stars2;
StarRating2.prototype.init1 = function() {
  stars2 = document.querySelectorAll('#rating2 span');
  for (var i = 0; i < stars2.length; i++) {
    stars2[i].setAttribute('data-count', i);
    stars2[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
  }
  document.querySelector('#rating2').addEventListener('mouseleave', this.leaveStarListener.bind(this));
};

/**
 * This method is fired when a user hovers over a single star
 * @param e
 */
StarRating2.prototype.enterStarListener = function(e) {
  this.fillStarsUpToElement(e.target);
};

/**
 * This method is fired when the user leaves the #rating2 element, effectively removing all hover states.
 */
StarRating2.prototype.leaveStarListener = function() {
rating_service=0;
  for(let i=0; i<stars2.length;i++){
    //console.log(stars2[i]);
    debugger;
    if(stars2[i].className=="fa fa-star hover"){
      rating_service =rating_service + 1;

    }else{
      i=100;
    }
    //debugger;
  }
};

/**
 * Fill the star ratings up to a specific position.
 * @param el
 */
StarRating2.prototype.fillStarsUpToElement = function(el) {
  // Remove all hover states:
  for (var i = 0; i < stars2.length; i++) {
    if (el == null || stars2[i].getAttribute('data-count') > el.getAttribute('data-count')) {
      stars2[i].classList.remove('hover');
    } else {
      stars2[i].classList.add('hover');
    }
  }
};

// Run:
new StarRating2();


//
// code for star rating

function StarRating3() {
  this.init3();
};

/**
 * Initialize
 */
var stars3;
StarRating3.prototype.init3 = function() {
  stars3 = document.querySelectorAll('#rating3 span');
  for (var i = 0; i < stars3.length; i++) {
    stars3[i].setAttribute('data-count', i);
    stars3[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
  }
  document.querySelector('#rating3').addEventListener('mouseleave', this.leaveStarListener.bind(this));
};

/**
 * This method is fired when a user hovers over a single star
 * @param e
 */
StarRating3.prototype.enterStarListener = function(e) {
  this.fillStarsUpToElement(e.target);
};

/**
 * This method is fired when the user leaves the #rating3 element, effectively removing all hover states.
 */
StarRating3.prototype.leaveStarListener = function() {
  rating_quality =0;
  for(let i=0; i<stars3.length;i++){
    //console.log(stars3[i]);
    debugger;
    if(stars3[i].className=="fa fa-star hover"){
      rating_quality =rating_quality + 1;

    }else{
      i=100;
    }
    //debugger;
  }
  console.log(rating_quality);
};

/**
 * Fill the star ratings up to a specific position.
 * @param el
 */
StarRating3.prototype.fillStarsUpToElement = function(el) {
  // Remove all hover states:
  for (var i = 0; i < stars3.length; i++) {
    if (el == null || stars3[i].getAttribute('data-count') > el.getAttribute('data-count')) {
      stars3[i].classList.remove('hover');
    } else {
      stars3[i].classList.add('hover');
    }
  }
};

// Run:
new StarRating3();


//


  }

  saveCustomerDetail(customerInfo) {
   // this.customerInfo.rating=rating;
this.customerInfo.rating_suggestion = rating_suggestion;
this.customerInfo.rating_quality = rating_quality;
this.customerInfo.rating_service = rating_service;
    console.log(customerInfo);
  }



}

interface RegisterCustome {
  name: string;
  mobile: string;
  email: string;
  city: string;
  rating_service: number;
  rating_quality: number;
  rating_suggestion: number;
}
