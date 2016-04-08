import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  	constructor() {

 	}
  	activate(id) {
  		document.getElementById(id).className = "circle-text";
 	}
}
