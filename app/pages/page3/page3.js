import {IonicApp, Modal, Platform, NavController, NavParams, Page, ViewController} from 'ionic-angular';
import {Date_Modal} from '../date_modal/date_modal';


@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
	    static get parameters() {
    return [[NavController], [NavParams]];
  }
  	constructor(nav) {
  		this.items = [];
  		this.nav = nav;
 	}
  	activate(id) {
      var temp;
      if(document.getElementById(id).className != "circle-text") {temp = 0;}
      if(document.getElementById(id).className == "circle-text") {temp = 1;}
      //var sendItem = this.items.pop;
      //this.items.push(sendItem);
      //var sendItems = this.items;
  		let modal = Modal.create(Date_Modal, temp, id);
    	this.nav.present(modal);
      document.getElementById(id).className = "circle-text";
 	}
}
