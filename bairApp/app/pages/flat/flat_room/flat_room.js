import {Page, NavController, NavParams} from 'ionic/ionic';
import {FlatList} from '../flat_list/flat_list';

@Page({
    templateUrl: 'build/pages/flat/flat_room/flat_room.html'
})

export class FlatRoom{
    constructor(nav: NavController, params: NavParams){
        this.nav = nav;
        this.params = params;
        this.type = this.params.get('type');
    };

    flat_room(room){
        this.nav.push(FlatList, {type: this.type, room: room});
    };
}
