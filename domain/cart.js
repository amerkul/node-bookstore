class CartItem {
    #book;
    #amount;

    constructor(book, amount) {
        this.#book = book;
        this.#amount = amount;
    }

    get book() {
        return this.#book;
    }

    set book(book) {
        this.#book = book;
    }

    get amount() {
        return this.#amount;
    }

    set amount(amount) {
        this.#amount = amount;
    }

    toString() {
        return `book: ${this.#book.toString()}, amount: ${this.#amount}`;
    }

}

export default class Cart {
    #books = new Map();

    getBooks() {
        return this.#books;
    }

    addBook(book, amount) {
        let bookInCart = false;
        this.#books.forEach((value, key) => {
            if (key === book.isbn) {
                bookInCart = true;
                value.amount = value.amount + amount;
            }
        });
        if (!bookInCart) {
            this.#books.set(book.isbn, new CartItem(book, amount));
        }
    }

    removeBook(bookKey) {
        this.#books.forEach((value, key) => {
            if (key === bookKey) {
                let amount = this.#books.get(bookKey).amount;
                this.#books.get(bookKey).amount = --amount;
            }
            if (this.#books.get(bookKey).amount === 0) {
                this.#books.delete(key);
            }
        });
    }

    calculateTotalPrice() {
        let sum = 0;
        for (let item of this.#books.values()) {
            sum += (item.amount * item.book.price);
        }
        return sum;
    }

    toString() {
        let str = "";
        this.#books.forEach(value => {
            str += value.toString();
        })
        return `books: ${str}`;
    }
}
