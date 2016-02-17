import {Injectable} from 'angular2/core';

@Injectable()
export class DataService{
    constructor(){
        console.log('DataService');
        this.flats = [
            {
                title: "Hello",
                info: "Nice Flat",
                images: [
                    "build/img/flat.jpg",
                    "build/img/flat.jpg",
                    "build/img/flat.jpg"
                ]
            },
            {
                title: "World",
                info: "Good Flat",
                images: [
                    "build/img/flat2.jpg",
                    "build/img/flat.jpg",
                    "build/img/flat.jpg"
                ]
            },
            {
                title: "Soliotoi",
                info: "Best Flat",
                images: [
                    "build/img/flat3.jpg",
                    "build/img/flat.jpg",
                    "build/img/flat.jpg"
                ]
            }
        ];
    }

    getData(type, uruunii_too){
        console.log("DataService > type: " + type + ', room: '+ uruunii_too);
        return this.flats;
    }
}
