import {Page, NavController} from 'ionic-angular';
import {Puzzle} from '../puzzle/puzzle';

@Page({
  templateUrl: 'build/pages/active-alarm/active-alarm.html',
})
export class ActiveAlarm {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  stop_alarm(){
    this.nav.setRoot(Puzzle);
    this.nav.push(Puzzle);
  }
  //todo
  snooze(){

  }
}
