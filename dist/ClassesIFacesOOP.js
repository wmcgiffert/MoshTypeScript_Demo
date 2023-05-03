"use strict";
class Account {
    constructor(id, owner, balance, nickname) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0');
        }
        this.balance += amount;
    }
}
let account = new Account(1, 'William', 0, 'Garrett');
console.log('Before deposit');
console.table(account);
account.deposit(10000);
console.log('After deposit');
console.table(account);
console.log(typeof account);
console.log(account instanceof Account);
class Account2 {
    constructor(id, owner, balance, nickname) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }
    readBalance() {
        return this.balance;
    }
    creditBalance(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be greater than 0');
        }
        this.balance -= amount;
        return `Balance is now ${this.balance}`;
    }
    debtBalance(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0');
        }
        this.balance += amount;
        return `Balance is now ${this.balance}`;
    }
}
let account2 = new Account2(1, 'William', 0, 'Garrett');
console.log(`Balance is ${account2.readBalance()}`);
console.log('After depositing 10000');
account2.debtBalance(10000);
console.log(`Balance is ${account2.readBalance()}`);
console.log('After crediting 10000');
account2.creditBalance(10000);
console.log(`Balance is ${account2.readBalance()}`);
//# sourceMappingURL=ClassesIFacesOOP.js.map