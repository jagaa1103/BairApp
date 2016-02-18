import {Injectable} from 'angular2/core';

@Injectable()
export class DataService{
    constructor(){
        console.log('DataService');
        this.flats = [
            {
                title: "Hello",
                info: "Чингис зочид буудлын зүүн талд бүх үйлчилгээндээ ойрхон угсармалын 9-р байрны 5/5 давхрын цэвэрхэн засвартай өвөлдөө дулаахан 44 мкв 2 өрөө байрыг яаралтай зарна",
                price: "95сая",
                room: "2",
                phone: "95091169",
                date: "2016.02.17",
                images: [
                    "build/img/flat.jpg",
                    "build/img/flat.jpg",
                    "build/img/flat.jpg"
                ]
            },
            {
                title: "World",
                info: "Good Flat",
                price: "95сая",
                room: "2",
                phone: "95091169",
                date: "2016.02.17",
                images: [
                    "build/img/flat2.jpg",
                    "build/img/flat.jpg",
                    "build/img/flat.jpg"
                ]
            },
            {
                title: "Soliotoi",
                info: "Best Flat",
                price: "95сая",
                room: "2",
                phone: "95091169",
                date: "2016.02.17",
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
