import {Page, NavController} from 'ionic/ionic';
import {FlatRoom} from '../flat_room/flat_room';

@Page({
    templateUrl: 'build/pages/flat/flat_type.html'
})

export class FlatType{
    constructor(nav:NavController){
        this.nav = nav;
    };

    selectedType(type){
        this.nav.push(FlatRoom, {type: type});
    }
}
