import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

/*
  Generated class for the FirebaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseService {

  public branding: FirebaseObjectObservable<any>;
  public hours: any;
  public info: any;
  public menuItems: FirebaseListObservable<any>;

  private storeId: any;

  constructor(public http: Http, private af: AngularFire) {
    console.log('Hello FirebaseService Provider');
  }

  setStoreId(storeId) {
    this.storeId = storeId;
    console.log(this.storeId);
  }

  public getMenuItems(): FirebaseListObservable<any> {
    this.menuItems = this.af.database.list('/stores/' + this.storeId + '/menu/items');
    return this.menuItems;
  }

  public getBranding(): FirebaseObjectObservable<any> {
    this.branding = this.af.database.object('/stores/' + this.storeId + '/branding');
    console.log(this.branding);
    return this.branding;
  }

}
