import {Page, NavController, NavParams} from 'ionic/ionic';
import {FlatDetail} from '../flat_detail/flat_detail';
import {DataService} from '../../../services/dataService';

@Page({
    templateUrl: 'build/pages/flat/flat_list/flat_list.html',
    providers: [DataService]
})

export class FlatList{
    constructor(nav: NavController, params: NavParams, dataService: DataService){
        this.nav = nav;
        this.navParams = params;
        this.type = this.navParams.get('type');
        this.room = this.navParams.get('room');
        this.flats = dataService.getData(this.type, this.room);
    }

    showDetail(flat){
        this.nav.push(FlatDetail, {flat_info: flat});
    }
}
