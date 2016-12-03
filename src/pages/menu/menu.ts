import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service';
import { FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  public menuItems: FirebaseListObservable<any>;
  public branding: any;

  constructor(public navCtrl: NavController, private fb: FirebaseService) {
    console.log(fb.getMenuItems());
  }

  ionViewDidLoad() {
    this.menuItems = this.fb.getMenuItems();
    this.branding = this.fb.getBranding()
  }

}
