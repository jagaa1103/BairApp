import {Page, NavController, Modal} from 'ionic/ionic';
import {FlatType} from '../flat/flat_type/flat_type';

@Page({
    templateUrl: 'build/pages/start/start.html'
})

export class StartPage{
    constructor(nav: NavController){
        this.nav = nav;
    };
    goFlat(){
        this.nav.push(FlatType);
    };
    goHouse(){
        console.log("goHouse");
    };
    goOffice(){
        console.log("goOffice");
    };
}
