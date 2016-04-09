//import {Page, NavController, NavParams} from 'ionic-angular';
import {IonicApp, Modal, Platform, NavController, NavParams, Page, ViewController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/date_modal/date_modal.html'
})
export class Date_Modal {
    static get parameters() {
    return [[NavController], [NavParams], [ViewController]];
  }

  constructor(nav, navParams,viewCtrl) {
    this.nav = nav;
    this.viewController = viewCtrl;

    var items = navParams.get('sendItems');
    var id = navParams.get('id');

    this.items = items;

  }

  dismiss() {
    this.viewController.dismiss();
  }
}