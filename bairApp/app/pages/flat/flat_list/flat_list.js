import {Page, NavParams} from 'ionic/ionic';
import {DataService} from '../../../services/dataService';

@Page({
    templateUrl: 'build/pages/flat/flat_list/flat_list.html',
    providers: [DataService]
})

export class FlatList{
    constructor(params: NavParams, dataService: DataService){
        this.navParams = params;
        this.type = this.navParams.get('type');
        this.room = this.navParams.get('room');
        dataService.getData(this.type, this.room);
    }
}
