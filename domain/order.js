export default class Order {
    #user;
    #cart;
    #totalPrice;

    constructor(user, cart, totalPrice) {
        this.#user = user;
        this.#cart = cart;
        this.#totalPrice = totalPrice;
    }


    get user() {
        return this.#user;
    }

    set user(value) {
        this.#user = value;
    }

    get cart() {
        return this.#cart;
    }

    set cart(value) {
        this.#cart = value;
    }

    get totalPrice() {
        return this.#totalPrice;
    }

    set totalPrice(value) {
        this.#totalPrice = value;
    }

    toString() {
        return `user: ${this.#user.toString()}, cart: ${this.#cart.toString()}, totalPrice: ${this.#totalPrice}`
    }
}
