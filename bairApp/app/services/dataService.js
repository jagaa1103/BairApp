import {Injectable} from 'angular2/core';

@Injectable()
export class DataService{
    constructor(){
        console.log('DataService');
        this.flats = [
            {
                title: "Hello",
                info: "Nice Flat"
            },
            {
                title: "World",
                info: "Good Flat"
            }
        ];
    }

    getData(type, uruunii_too){
        console.log("DataService > type: " + type + ', room: '+ uruunii_too);
        return this.flats;
    }
}
