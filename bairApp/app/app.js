import {App, IonicApp, Platform, Modal, MenuController} from 'ionic/ionic';
import {StartPage} from './pages/start/start';
import {ProfilePage} from './pages/profile/profile';
import {LoginPage} from './pages/profile/login/login';
import {PostItem} from './pages/post_item/post_item';
import {UserService} from './services/userService';
// import {BairType} from './pages/bair/bairtype';

@App({
  // template: '<ion-nav [root]="rootPage"></ion-nav>',
  template: `
  <ion-menu [content]="content">
    <ion-toolbar>
        <ion-title>Menus</ion-title>
    </ion-toolbar>
    <ion-content>
        <ion-item primary>PROFILE</ion-item>
        <ion-list>
            <ion-item (click)="showProfile()">
                <ion-icon name="ios-contact-outline" item-left></ion-icon>Your ID
            </ion-item>
            <ion-item (click)="postItem()">
                <ion-icon name="ios-call-outline" item-left></ion-icon>99119911
            </ion-item>
        </ion-list>
        <ion-item primary>ACTIVITIES</ion-item>
        <ion-list>
            <ion-item (click)="postItem()">
                <ion-icon name="ios-create-outline" item-left></ion-icon>Post Item
            </ion-item>
            <ion-item (click)="showProfile()">
                <ion-icon name="ios-heart-outline" item-left></ion-icon>Favorite
            </ion-item>
        </ion-list>
    </ion-content>
  </ion-menu>

  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>`,
  config: {},
  providers: [UserService]
})
export class MyApp {
    constructor(app: IonicApp, platform: Platform, menu: MenuController, userService: UserService) {
        this.rootPage = StartPage;
        this.userService = userService;
        this.menu = menu;
        this.app = app;
        platform.ready().then(() => {
        });
    }
    showProfile() {
        this.menu.close();
        if(this.userService.checkLogin()){
            console.log('user logged in');
            let nav = this.app.getComponent('nav');
            let modal = Modal.create(ProfilePage);
            nav.present(modal);
        }else{
            console.log('not user info');
            let nav = this.app.getComponent('nav');
            let modal = Modal.create(LoginPage);
            nav.present(modal);
        }
    }

    postItem() {
        this.menu.close();
        console.log('showModal');
        let nav = this.app.getComponent('nav');
        let modal = Modal.create(PostItem);
        nav.present(modal);
    }
}
