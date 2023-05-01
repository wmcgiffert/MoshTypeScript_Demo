"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0');
        }
        this.balance += amount;
    }
}
//# sourceMappingURL=ClassesIFacesOOP.js.map