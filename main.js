import User from "./domain/user.js";
import Cart from "./domain/cart.js";
import Order from "./domain/order.js";
import Bookhouse from "./repository/bookhouse.js";

const bookhouse = new Bookhouse();
const anna = new User(1, 'Anna Merkul', 'anna.merkul@bk.ru');
const daniil = new User(2, 'Daniil Zhuravlyov', 'daniil1234@gmail.com');

const annCart = new Cart();
const daniilCart = new Cart();


annCart.addBook(bookhouse.getBookByIsbn('978-5-389-06010-4'), 3);
annCart.addBook(bookhouse.getBookByIsbn('978-5-04-100038-7'), 2);
annCart.addBook(bookhouse.getBookByIsbn('978-5-389-06010-4'), 1);

daniilCart.addBook(bookhouse.getBookByIsbn('978-5-699-93151-4'), 4);

annCart.removeBook('978-5-389-06010-4');
daniilCart.removeBook('978-5-699-93151-4');

const annTotalPrice = annCart.calculateTotalPrice();
const daniilTotalPrice = daniilCart.calculateTotalPrice();

const annOrder = new Order(anna, annCart, annTotalPrice);
const daniilOrder = new Order(daniil, daniilCart, daniilTotalPrice);

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


      

