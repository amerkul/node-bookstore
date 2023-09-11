
import Book, { FictionBook, ThrillerBook } from "../domain/book.js";

/**
 * An simple example of repository for books. It stores books and provide methods 
 * to manipulate them.
 */
export default class Bookhouse {
    #bookhouse = new Map();

    constructor() {
        this.#bookhouse.set('978-5-389-06010-4', new FictionBook('Demons', 'Fyodor Dostoevsky', '978-5-389-06010-4', 10, 5));
        this.#bookhouse.set('978-5-699-93151-4', new ThrillerBook('The Collector', 'John Fowles', '978-5-699-93151-4', 15, 8));
        this.#bookhouse.set('978-5-04-100038-7', new Book('Morphine', 'Mikhail Bulgakov', '978-5-04-100038-7', 8, 3));
    }

    /**
     * 
     * @returns array of books
     */
    getAll() {
        return this.#bookhouse;
    }

    /**
     * 
     * @param {*} isbn 
     * @returns book
     */
    getBookByIsbn(isbn) {
        return this.#bookhouse.get(isbn);
    }

    /**
     * @param {*} title 
     * @returns array of books
     */
    getByTitle(title) {
        return Array.from(this.#bookhouse.values())
        .filter(value => value.title === title);
    }

    /**
     * 
     * @param {*} author 
     * @returns array of books
     */
    getByAuthor(author) {
        return Array.from(this.#bookhouse.values())
        .filter(value => value.author === author);
    }

}


