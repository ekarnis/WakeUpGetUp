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
  		document.getElementById(id).className = "circle-text";
  		this.items.push({
  			day: id,
  			make_bed: 'true',
  			brush_teeth: 'true',
  			eat_breakfast: 'true',
  			brush_teeth_night: 'true',
  			floss: 'true',
  			read: 'true',
      	});
      	var sendItem = this.items.pop;
      	this.items.push(sendItem);
      	//var sendItems = this.items;
  		let modal = Modal.create(Date_Modal, sendItem, id);
    	this.nav.present(modal);
 	}
}
