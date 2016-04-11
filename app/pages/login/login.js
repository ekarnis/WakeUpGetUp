import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {Survey} from '../survey/survey';

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
    this.nav.setRoot(TabsPage);
    this.nav.push(TabsPage);
  }
    openSurvey(){
    this.nav.setRoot(Survey);
    this.nav.push(Survey);
  }
}
