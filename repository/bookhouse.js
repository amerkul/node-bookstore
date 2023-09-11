
import Book, { FictionBook, ThrillerBook } from "../domain/book.js";

export default class Bookhouse {
    #bookhouse = new Map();

    constructor() {
        this.#bookhouse.set('978-5-389-06010-4', new FictionBook('Demons', 'Fyodor Dostoevsky', '978-5-389-06010-4', 10, 5));
        this.#bookhouse.set('978-5-699-93151-4', new ThrillerBook('The Collector', 'John Fowles', '978-5-699-93151-4', 15, 8));
        this.#bookhouse.set('978-5-04-100038-7', new Book('Morphine', 'Mikhail Bulgakov', '978-5-04-100038-7', 8, 3));
    }

    getAll() {
        return this.#bookhouse;
    }

    getBookByIsbn(isbn) {
        return this.#bookhouse.get(isbn);
    }

    getByTitle(title) {
        return Array.from(this.#bookhouse.values())
        .filter(value => value.title === title);
    }

    getByAuthor(author) {
        return Array.from(this.#bookhouse.values())
        .filter(value => value.author === author);
    }

}


