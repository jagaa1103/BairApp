import {Injectable} from 'angular2/core';

@Injectable()
export class DataService{
    constructor(){
        console.log('DataService');
    }

    getData(type, uruunii_too){
        console.log("DataService > type: " + type + ', room: '+ uruunii_too);
    }
}
