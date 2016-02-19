import {Page, ViewController} from 'ionic/ionic';
import {UserService} from '../../services/userService';


@Page({
    templateUrl: 'build/pages/profile/profile.html',
    providers: [UserService]
})

export class ProfilePage{
    constructor(view: ViewController){
        this.view = view;
        console.log('Profile');
        this.user_info = UserService.getUserInfo();
    }

    closeProfile(){
        this.view.dismiss();
    }
}
