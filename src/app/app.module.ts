import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { MenuItemPage } from '../pages/menu-item/menu-item';
import { GroupsPipe } from '../pipes/group-by-category-pipe';
import { TabsPage } from '../pages/tabs/tabs';
import { FirebaseService } from '../providers/firebase-service';
import { AngularFireModule } from 'angularfire2';
import { LocationPopover } from '../pages/menu/location-list';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyB2wATUeR-4nfBGJQH7ZmY-5NCi1FwzcUo",
    authDomain: "deliverify.firebaseapp.com",
    databaseURL: "https://deliverify.firebaseio.com",
    storageBucket: "firebase-deliverify.appspot.com",
    messagingSenderId: "852851221189"
  };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MenuPage,
    MenuItemPage,
    TabsPage,
    LocationPopover,
    GroupsPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MenuPage,
    MenuItemPage,
    LocationPopover,
    TabsPage
  ],
  providers: [ {provide: ErrorHandler, useClass: IonicErrorHandler}, FirebaseService ]
})
export class AppModule {}
