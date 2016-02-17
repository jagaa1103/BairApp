import {Page, NavParams} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/flat/flat_detail/flat_detail.html'
})

export class FlatDetail{
    constructor(params: NavParams){
        console.log(params.get('flat_info'));
        this.flat_info = params.get('flat_info');
    }
}
