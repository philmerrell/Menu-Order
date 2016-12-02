import { Component, Pipe, PipeTransform } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Pipe({name: 'groupMenuByCategory'})
export class GroupsPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    if(value) {
      var categories = {};
      value.forEach(function(o) {
        var category = o.category;
        categories[category] = categories[category] ? categories[category] : { name: category, items: [] };
        categories[category].items.push(o);  
      });
    return Object.keys(categories).map(function (key) { return categories[key] });
    }
  }
}

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  public menuItems: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private fb: FirebaseService) {
    console.log(fb.getMenuItems());
  }

  ionViewDidLoad() {
    this.menuItems = this.fb.getMenuItems();
  }

}
