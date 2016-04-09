import {Page, NavController} from 'ionic-angular';
import {Alarms} from '../alarms/alarms';
import {BedTime} from '../bedtime/bedtime';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
	static get parameters(){
		return [[NavController]];
	}
	constructor(nav){
		this.nav = nav;
	}
  goToAlarmPage(){
    this.nav.push(Alarms);
  }
  goToBedTimePage(){
    this.nav.push(BedTime);
  }
  onPageLoad(){
  	GetClock(); setInterval(GetClock,1000);
  }
}
