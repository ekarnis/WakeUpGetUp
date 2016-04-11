import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {DataService} from './providers/data';
import {TabsPage} from './pages/tabs/tabs';
import {Login} from './pages/login/login';

@App({
  template: '<ion-nav swipe-back-enabled="true" [root]="rootPage"></ion-nav>',
  providers: [DataService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = TabsPage;
    //this.rootPage = Login;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.registerBackButtonListener();
      StatusBar.styleDefault();
    });
  }
  gisterBackButtonListener() {
    document.addEventListener('backbutton', () => {
      var nav = this.getNav();
      if (nav.canGoBack()) {
        nav.pop();
      }
      else {
        this.confirmExitApp(nav);
      }
    });
  }


confirmExitApp(nav) {
    let confirm = Alert.create({
      title: 'Confirm Exit',
      message: 'Really exit app?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Exit',
          handler: () => {
            navigator.app.exitApp();
          }
        }
      ]
    });
    nav.present(confirm);
  }


getNav() {
    return this.app.getComponent('nav');
  }
}
