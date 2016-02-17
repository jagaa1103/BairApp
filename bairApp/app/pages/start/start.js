import {Page, NavController} from 'ionic/ionic';
import {BairType} from '../bair/bairtype';

@Page({
    templateUrl: 'build/pages/start/start.html'
})

export class StartPage{
    constructor(nav: NavController){
        console.log('StartPage');
        this.nav = nav;
    };
    goOronSuuts(){
        console.log("goOronSuuts");
        console.log(this);
        console.log(BairType);
        console.log(this.nav);
        this.nav.push(BairType);
    };
    goHashaaBaishin(){
        console.log("goHashaaBaishin");
    };
    goOffice(){
        console.log("goOffice");
    };
}
