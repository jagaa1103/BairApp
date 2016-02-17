import {Page} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/start/start.html'
})

export class StartPage{
    constructor(){
        console.log('StartPage');
    };
    goOronSuuts(){
        console.log("goOronSuuts");
    };
    goHashaaBaishin(){
        console.log("goHashaaBaishin");
    };
    goOffice(){
        console.log("goOffice");
    };
}
