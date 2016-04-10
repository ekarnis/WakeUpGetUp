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

    //var item = navParams.get('sendItem');
    //this.item = item;

    var id = navParams.get('id');
    var temp = navParams.get('temp');

    if(temp == 0){

    }

    this.morning_items = [];
    this.night_items = [];

    this.morning_items.push({
        type: 'Make Bed',
        checked: 'true'
        });

    this.morning_items.push({
        type: 'Brush Teeth',
        checked: 'true'

      });
    this.morning_items.push({
        type: 'Eat Breakfast',
        checked: 'true'

      });

    this.night_items.push({
        type: 'Brush Teeth',
        checked: 'true'
        });

    this.night_items.push({
        type: 'Floss',
        checked: 'true'

      });
    this.night_items.push({
        type: 'Read',
        checked: 'true'

      });


  }

  fill_page(){
    document.getElementById("date").innerHTMl = "April " + id; 
  }

  dismiss() {
    this.viewController.dismiss();
  }
}