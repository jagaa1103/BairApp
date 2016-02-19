import {Page, ViewController} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/profile/login/login.html'
})

export class LoginPage{
    constructor(view:ViewController){
        console.log('loaded LoginPage');
        this.view = view;
        this.id, this.pass;
        this.statusForgot = true;
    }
    login(){
        console.log(this.id);
        console.log(this.pass);
    }
    register(){

    }
    forgotPassWord(){
        this.statusForgot = false;
    }
    closeLogin(){
        this.view.dismiss();
    }

    hideForgotPass(){
        return this.statusForgot;
    }
}
