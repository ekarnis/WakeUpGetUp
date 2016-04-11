import {Page, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Page({
  templateUrl: 'build/pages/morninggoals/morninggoals.html',
})
export class MorningGoals {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.morning_items = [];

    this.morning_items.push({
        type: 'Make Bed',
        });

    this.morning_items.push({
        type: 'Brush Teeth',

      });
    this.morning_items.push({
        type: 'Eat Breakfast',

      });
    this.exercise_items = [];

    this.exercise_items.push({
        type: '20 Pushups',
        });

    this.exercise_items.push({
        type: '50 Jumping Jacks',

      });
    this.exercise_items.push({
        type: '10 Pull Ups',

      });
  }
    finished(){
      this.nav.setRoot(TabsPage);
      this.nav.push(TabsPage);
  }
}
