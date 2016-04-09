import {Page, NavController} from 'ionic-angular';
import {Login} from '../login/login';

@Page({
  templateUrl: 'build/pages/page5/page5.html'
})
export class Page5 {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  logOut(){
    this.nav.setRoot(Login);
    this.nav.push(Login)
  }
}
