import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MenuItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu-item',
  templateUrl: 'menu-item.html'
})
export class MenuItemPage {

  public item: any;

  constructor(public navCtrl: NavController, params: NavParams) {
    this.item = params.get("item");
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('Hello MenuItemPage Page');
  }

}
