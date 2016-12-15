import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service';
import { FirebaseListObservable } from 'angularfire2';
import { MenuItemPage } from '../menu-item/menu-item';
import { LocationPopover } from './location-list';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  public menuItems: FirebaseListObservable<any>;
  public locations: FirebaseListObservable<any>;
  public branding: any;

  constructor(public navCtrl: NavController, private fb: FirebaseService, public popoverCtrl: PopoverController) {
    console.log(fb.getMenuItems());
  }

  ionViewDidLoad() {
    this.menuItems = this.fb.getMenuItems();
    this.branding = this.fb.getBranding();
    this.locations = this.fb.getLocations();
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(LocationPopover);
    popover.present({
      ev: event
    });
  }

  viewItemDetail(item) {
    this.navCtrl.push(MenuItemPage, {item: item});
  }

}
