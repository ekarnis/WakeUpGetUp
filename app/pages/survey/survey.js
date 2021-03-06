import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

/*
  Generated class for the SurveyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/survey/survey.html',
})
export class Survey {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  onDrag($event) {
        $event.stopPropagation();
    }
    openApp(){
    this.nav.setRoot(TabsPage);
    this.nav.push(TabsPage)
  }
}
