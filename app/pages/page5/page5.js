import {Page, NavController} from 'ionic-angular';
import {Login} from '../login/login';
import {Survey} from '../survey/survey';
import {ActiveAlarm} from '../active-alarm/active-alarm';

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
  log_out(){
    this.nav.setRoot(Login);
    this.nav.push(Login);
  }
  redo_survey(){
    this.nav.setRoot(Survey);
    this.nav.push(Survey);
  }
  demonstrate_alarm(){
    this.nav.setRoot(ActiveAlarm);
    this.nav.push(ActiveAlarm);
  }
}
