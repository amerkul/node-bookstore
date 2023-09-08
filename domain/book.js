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

    getTitle() {
        return this.#title;
    }

    setTitle(title) {
        this.#title = title;
    }

    getAuthor() {
        return this.#author;
    }

    setAuthor(author) {
        this.#author = author;
    }

    getIsbn() {
        return this.#isbn;
    }

    setIsbn(isbn) {
        this.#isbn = isbn;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(price) {
        this.#price = price;
    }

    getAvailability() {
        return this.#availability;
    }

    setAvailability(availability) {
        this.#availability = availability;
    }

}
