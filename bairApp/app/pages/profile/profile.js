import {Page, ViewController} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/profile/profile.html'
})

export class ProfilePage{
    constructor(view: ViewController){
        this.view = view;
        console.log('Profile');
    }

    closeProfile(){
        this.view.dismiss();
    }
}
