import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Художественная литература'},
            {id: 2, name: 'Учебная литература'},
            {id: 3, name: 'Подарочные издания'}
        ];
        this._authors = [
            {id: 1, name: 'Жанпейсов Марат'},
            {id: 2, name: 'Джордж Мартин'}
        ];
        this._books = [
            {id: 1, name: 'Кровь Бога. Книга первая', price: 399, rating: 5, img: 'f9f4462b-f93d-4510-89f8-bb3706ed7438.jpg'},
            {id: 2, name: 'Буря мечей', price: 799, rating: 5, img: 'c955fbc1-d702-4f6c-a292-bffb9215ca05.jpg'},
            {id: 3, name: 'Дельта-гир. Том 1', price: 109, rating: 5, img: '87445c12-ccbd-4370-9503-d57c1abdfcce.jpg'},
            {id: 4, name: 'Дрим тим', price: 0, rating: 5, img: '2a9cdf13-bcf7-4a00-8885-b00157eaa53a.jpg'},
            {id: 5, name: '1%-ое усиление', price: 99, rating: 5, img: 'a20e1761-ab80-4e4a-b3e3-2c063a11021d.jpg'},
        ];
        this._selectedType = {};
        this._selectedAuthor = {};
        makeAutoObservable(this);
    }
    setTypes(types) {
        this._types = types;
    }
    setAuthors(authors) {
        this._authors = authors;
    }
    setBooks(books) {
        this._books = books;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedAuthor(author) {
        this._selectedAuthor = author;
    }

    get types() {
        return this._types;
    }

    get authors() {
        return this._authors;
    }

    get books() {
        return this._books;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedAuthor() {
        return this._selectedAuthor;
    }
}