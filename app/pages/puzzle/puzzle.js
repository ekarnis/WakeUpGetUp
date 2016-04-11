import {Page, NavController} from 'ionic-angular';
import {MorningGoals} from '../morninggoals/morninggoals';
@Page({
  templateUrl: 'build/pages/puzzle/puzzle.html',
})
export class Puzzle {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  finished(){
    //var q1 = document.getElementById("q1").innerHTML;
    //var q2 = document.getElementById("q2").innerHTML;
    //var q3 = document.getElementById("q3").innerHTML;
    //if(q1 == 56 && q2 == 27 && q3 == 48){
      this.nav.setRoot(MorningGoals);
      this.nav.push(MorningGoals);
    //}
  }
}


