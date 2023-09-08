export default class Cart {
    #books = new Map();

    constructor() {}

    constructor(books) {
        this.#books = books;
    }

    getBooks() {
        return this.#books;
    }

    addBook(book, amount) {
        let bookInCart = false;
        this.#books.forEach((value, key) => {
            if (key === book.getIsbn()) {
                bookInCart = true;
                ++value.amount;
            }
        });
        if (!bookInCart) {
            this.#books.set(book.getIsbn(), {...book, amount: amount});
        }
    }

    removeBook(book) {
        this.#books.forEach((value, key) => {
            if (key === book.getIsbn()) {
                this.#books.set(key, {...book, amount: --value.amount});
            }
            if (value.amount === 0) {
                this.#books.delete(key);
            }
        });
    }

    calculateTotalPrice() {
        return this.#books.values()
        .reduce((sum, book) => {sum = book.price * book.amount + sum}, 0);
    }

}
