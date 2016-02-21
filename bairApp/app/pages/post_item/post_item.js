import {Page, ViewController} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/post_item/post_item.html'
})

export class PostItem{
    constructor(view: ViewController){
        console.log('PostItem');
        this.view = view;
    }

    closePost(){
        this.view.dismiss();
    }
}
