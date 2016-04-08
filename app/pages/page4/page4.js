import {Page, Platform} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page4/page4.html'
})

export class Page4 {
	static get parameters(){
		return [[Platform]];
	}
	//group: string = "Friends";
  	//isAndroid: boolean = false;

  	constructor(/*platform: Platform*/) {
    	//this.isAndroid = platform.is('android');
  	}
}