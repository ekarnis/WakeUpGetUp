//import {Page, NavController, NavParams} from 'ionic-angular';
import {IonicApp, Modal, Platform, NavController, NavParams, Page, ViewController} from 'ionic-angular';
import {BedTime_Modal} from '../bedtime_modal/bedtime_modal';


@Page({
  templateUrl: 'build/pages/bedtime/bedtime.html'
})
export class BedTime {
    static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    this.items = [];

    this.items.push({
        time: '10:00 PM ',
        days: 'MON TUE WED THU FRI SAT SUN',
        num: '0',
        checked:'true',
      });
    this.items.push({
        time: '12:00 PM ',
        days: 'SAT SUN',
        num: '1',
        checked:'true',
      });
    this.items.push({
        time: '8:00 PM ',
        days: 'MON TUE WED THU FRI',
        num: '2',
        checked:'false',
      });
  }

    viewAlarm(sendItem) {
    	let modal = Modal.create(BedTime_Modal, sendItem);
    	this.nav.present(modal);
  	}

  	newAlarm() {
	    this.items.push({
	        time: '10:00 PM ',
	        days: 'MON TUE WED THU FRI SAT SUN',
	        num: '0',
	        checked:'true',
	      });

  		let modal = Modal.create(BedTime_Modal, items[0]);
    	this.nav.present(modal);
  	}

  	check(sendItem){
  		if(sendItem.checked == 'true') sendItem.checked == 'false';
  		if(sendItem.checked == 'false') sendItem.checked == 'true';
  	}
}
