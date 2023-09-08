export default class Order {
    #user;
    #cart;
    #totalPrice;

    constructor(user, cart, totalPrice) {
        this.#user = user;
        this.#cart = cart;
        this.#totalPrice = totalPrice;
    }
    
}
