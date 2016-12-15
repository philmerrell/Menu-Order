import { Component } from '@angular/core';
import { FirebaseService } from '../../providers/firebase-service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  template: `
    <ion-list>
      <ion-item *ngFor="let location of locations | async">
        {{ location.name }}
      </ion-item>
    </ion-list>
  `
})
export class LocationPopover {
  
  public locations: FirebaseListObservable<any>;

  constructor(private fb: FirebaseService) {
    this.locations = this.fb.getLocations();
  }

  
  
}