export default class User {
    #userId;
    #name;
    #email;
    
    constructor(userId, name, email) {
        this.#userId = userId;
        this.#name = name;
        this.#email = email;
    }

    getUserId() {
        return this.#userId;
    }

    setUserId(userId) {
        this.#userId = userId;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        this.#email = email;
    }

}
