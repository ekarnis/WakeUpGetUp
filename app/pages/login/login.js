import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class Login {
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
