import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Fridges' },
            { id: 2, name: 'Smartphones'},
            { id: 3, name: 'Notebooks'},
            { id: 4, name: 'TVs'},
        ];
        this._brands = [
            { id: 1, name: "Samsung"},
            { id: 2, name: "Apple"},
            { id: 3, name: "Lenovo"},
            { id: 4, name: "Asus"}
        ];
        this._devices = [
            { id: 1, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`},
            { id: 2, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`},
            { id: 3, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`},
            { id: 4, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`},
            { id: 5, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`},
            { id: 6, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`},
            { id: 7, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`},
            { id: 8, name: "IPhone 12 pro", price: 2500, rating: 5, img: `https://avatars.mds.yandex.net/get-mpic/4932805/img_id320032172410367143.png/orig`},
        ];
        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}
