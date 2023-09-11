/**
 * The parent class. It consists the common information for each book.
 */
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

    /**
     * It's a polymorphic method. Subclasses can override it
     * with a different behavior.
     * 
     * @returns the type of book
     */
    getTypeOfBook() {
        return 'The type is unknown';
    }

    toString() {
        return `title: ${this.#title}, author: ${this.#author}, 
        isbn: ${this.#isbn}, price: ${this.#price}, availability: ${this.#availability}`;
    }

}

/**
 * It's a Book subclass. It inherits fields and public methods of Book class.
 */
export class FictionBook extends Book {
    
    constructor(title, author, isbn, price, availability) {
        /**
         * Invokes a constructor of a superclass.
         */
        super(title, author, isbn, price, availability);
    }

    /**
     * It's a overriden method.
     * @returns the type of book.
     */
    getTypeOfBook() {
        return 'Fiction';
    }

}

/**
 * It's a Book subclass. It inherits fields and public methods of Book class.
 */
export class ThrillerBook extends Book {

    /**
    * Invokes a constructor of a superclass.
    */
    constructor(title, author, isbn, price, availability) {
        super(title, author, isbn, price, availability);
    }

    /**
     * It's a overriden method.
     * @returns the type of book.
     */
    getTypeOfBook() {
        return 'NonFiction';
    }

}
