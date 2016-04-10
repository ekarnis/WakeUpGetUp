import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  constructor() {
    this.morning_items = [];
    this.night_items = [];

    this.morning_items.push({
        type: 'Make Bed',
        });

    this.morning_items.push({
        type: 'Brush Teeth',

      });
    this.morning_items.push({
        type: 'Eat Breakfast',

      });

    this.night_items.push({
        type: 'Brush Teeth',
        });

    this.night_items.push({
        type: 'Floss',

      });
    this.night_items.push({
        type: 'Read',

      });

  }
}
