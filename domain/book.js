export default class Book {
    #title;
    #author;
    #isbn;
    #price;
    #availability;

    constructor(title, author, isbn, price, availability) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
        this.#price = price;
        this.#availability = availability;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    get author() {
        return this.#author;
    }

    set author(author) {
        this.#author = author;
    }

    get isbn() {
        return this.#isbn;
    }

    set isbn(isbn) {
        this.#isbn = isbn;
    }

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price;
    }

    get availability() {
        return this.#availability;
    }

    set availability(availability) {
        this.#availability = availability;
    }

    toString() {
        return JSON.stringify(`title: ${this.#title}, author: ${this.#author}, 
        isbn: ${this.#isbn}, price: ${this.#price}, availability: ${this.#availability}`);
    }

}
