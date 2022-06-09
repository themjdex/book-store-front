import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._types = [];
        this._authors = [];
        this._books = [];
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