export default class User {
    #userId;
    #name;
    #email;
    
    constructor(userId, name, email) {
        this.#userId = userId;
        this.#name = name;
        this.#email = email;
    }

    get userId() {
        return this.#userId;
    }

    set userId(userId) {
        this.#userId = userId;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    toString() {
        return JSON.stringify(`userId: ${this.#userId}, name: ${this.#name}, email: ${this.#email}`);
    }

}
