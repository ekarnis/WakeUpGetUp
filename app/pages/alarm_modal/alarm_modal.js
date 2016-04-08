//import {Page, NavController, NavParams} from 'ionic-angular';
import {IonicApp, Modal, Platform, NavController, NavParams, Page, ViewController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/alarm_modal/alarm_modal.html'
})
export class Alarm_Modal {
    static get parameters() {
    return [[NavController], [NavParams], [ViewController]];
  }

  constructor(nav, navParams,viewCtrl) {
    this.nav = nav;
    this.viewController = viewCtrl;

    var item = navParams.get('sendItem');

    this.item = item;

  }

  dismiss() {
    this.viewController.dismiss();
  }
}