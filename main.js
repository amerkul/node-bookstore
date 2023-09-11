import User from "./domain/user.js";
import Cart from "./domain/cart.js";
import Order from "./domain/order.js";
import Bookhouse from "./repository/bookhouse.js";

/**
 * Create a bookhouse.
 */
const bookhouse = new Bookhouse();

/**
 * Create users
 */
const anna = new User('Anna Merkul', 'anna.merkul@bk.ru');
const daniil = new User('Daniil Zhuravlyov', 'daniil1234@gmail.com');

/**
 * Create cart for each user.
 */
const annCart = new Cart();
const daniilCart = new Cart();


/**
 * Add books in carts
 */
annCart.addBook(bookhouse.getBookByIsbn('978-5-389-06010-4'), 3);
annCart.addBook(bookhouse.getBookByIsbn('978-5-04-100038-7'), 2);
annCart.addBook(bookhouse.getBookByIsbn('978-5-389-06010-4'), 1);

daniilCart.addBook(bookhouse.getBookByIsbn('978-5-699-93151-4'), 4);

/**
 * Remove books from carts.
 */
annCart.removeBook('978-5-389-06010-4');
daniilCart.removeBook('978-5-699-93151-4');

/**
 * Calculate the total price
 */
const annTotalPrice = annCart.calculateTotalPrice();
const daniilTotalPrice = daniilCart.calculateTotalPrice();

/**
 * Create orders
 */
const annOrder = new Order(anna, annCart, annTotalPrice);
const daniilOrder = new Order(daniil, daniilCart, daniilTotalPrice);

/**
 * Change the availability of books
 */
annOrder.cart.getBooks().forEach((value, key) => {
    if (bookhouse.getAll().has(key)) {
        bookhouse.getAll().get(key).availability -= value.amount;
    }
});

daniilOrder.cart.getBooks().forEach((value, key) => {
    if(bookhouse.getAll().has(key)) {
        bookhouse.getAll().get(key).availability -= value.amount;
    }
});

console.log(annOrder.toString());
console.log(daniilOrder.toString());

// some searching 
const booksByTitle = bookhouse.getByTitle('Demons');
const booksByAuthor = bookhouse.getByAuthor('Mikhail Bulgakov');

for (let book of booksByTitle) {
    console.log(book.getTypeOfBook());
    console.log(book.toString());
}

for (let book of booksByAuthor) {
    console.log(book.getTypeOfBook());
    console.log(book.toString());
}


      

