import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class UserService{
    constructor(){
        console.log('UserService');
        this.user_info = JSON.parse(window.localStorage.getItem('user_info'));
    }

    getUserInfo(){
        return this.user_info;
    }
    setUserInfo(id:String, pass: String){
        console.log('user_id: ' + id + ', user_pass: ' + pass);
        let user_info = { user_id: id, user_pass: pass};
        window.localStorage.setItem('user_info', JSON.stringify(user_info));
        this.user_info = user_info;
    }
    checkLogin(){
        if(this.user_info){
            return true;
        }else{
            return false;
        }
    }
}
