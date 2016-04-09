//import {Page, NavController, NavParams} from 'ionic-angular';
import {IonicApp, Modal, Platform, NavController, NavParams, Page, ViewController} from 'ionic-angular';
import {Alarm_Modal} from '../alarm_modal/alarm_modal';


@Page({
  templateUrl: 'build/pages/alarms/alarms.html'
})
export class Alarms {
    static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    this.items = [];

    this.items.push({
        time: '8:00 AM ',
        type: 'PUZZLE',
        days: 'MON TUE WED THU FRI SAT SUN',
        num: '0',
        checked:'true',
      });
    this.items.push({
        time: '9:00 AM ',
        type: 'PUZZLE',
        days: 'SAT SUN',
        num: '1',
        checked:'true',
      });
    this.items.push({
        time: '5:00 PM ',
        type: 'NORMAL',
        days: 'MON TUE WED THU FRI',
        num: '2',
        checked:'false',
      });
  }

    viewAlarm(sendItem) {
    	let modal = Modal.create(Alarm_Modal, sendItem);
    	this.nav.present(modal);
  	}

  	newAlarm() {
	    this.items.push({
	        time: '8:00 AM ',
	        type: 'PUZZLE',
	        days: 'MON TUE WED THU FRI SAT SUN',
	        num: '0',
	        checked:'true',
	      });

  		let modal = Modal.create(Alarm_Modal, items[0]);
    	this.nav.present(modal);
  	}

  	check(sendItem){
  		if(sendItem.checked == 'true') sendItem.checked == 'false';
  		if(sendItem.checked == 'false') sendItem.checked == 'true';
  	}
}
