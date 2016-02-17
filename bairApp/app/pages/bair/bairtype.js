import {Page} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/bair/bairtype.html'
})

export class BairType{
    constructor(){
        console.log("BairType");
    };

    onPageLoaded() {
        console.log("I'm alive!");
    }
}
