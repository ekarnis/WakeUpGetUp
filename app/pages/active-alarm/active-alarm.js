import {Page, NavController} from 'ionic-angular';

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
  openApp(){
    //this.rootPage = TabsPage;
    this.nav.setRoot(TabsPage);
    this.nav.push(TabsPage)
  }
}
