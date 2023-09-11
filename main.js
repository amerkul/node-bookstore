import Book from "./domain/book.js";
import User from "./domain/user.js";
import Cart from "./domain/cart.js";
import Order from "./domain/order.js";

const bookhouse = new Map();

bookhouse.set('978-5-389-06010-4', new Book('Demons', 'Fyodor Dostoevsky', '978-5-389-06010-4', 10, 5));
bookhouse.set('978-5-699-93151-4', new Book('The Collector', 'John Fowles', '978-5-699-93151-4', 15, 8));
bookhouse.set('978-5-04-100038-7', new Book('Morphine', 'Mikhail Bulgakov', '978-5-04-100038-7', 8, 3));

const anna = new User(1, 'Anna Merkul', 'anna.merkul@bk.ru');
const daniil = new User(2, 'Daniil Zhuravlyov', 'daniil1234@gmail.com');

const annCart = new Cart();


annCart.addBook(bookhouse.get('978-5-389-06010-4'), 3);
annCart.addBook(bookhouse.get('978-5-04-100038-7'), 2);
annCart.addBook(bookhouse.get('978-5-389-06010-4'), 1);

let books = annCart.getBooks();

annCart.removeBook('978-5-389-06010-4');

const totalPrice = annCart.calculateTotalPrice();

console.log(totalPrice);

const annOrder = new Order(anna, annCart, totalPrice);

annOrder.cart.getBooks().forEach((value, key) => {
    if (bookhouse.has(key)) {
        bookhouse.get(key).availability -= value.amount;
    }
});

console.log(annOrder.toString());


      

