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
        this._balance = balance;
        this.nickname = nickname;
    }
    readBalance() {
        return this._balance;
    }
    creditBalance(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be greater than 0');
        }
        this._balance -= amount;
        return `Balance is now ${this._balance}`;
    }
    debtBalance(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0');
        }
        this._balance += amount;
        return `Balance is now ${this._balance}`;
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
class Account3 {
    constructor(id, owner, balance, nickname) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }
    ;
    readBalance() {
        return this.balance;
    }
}
class Account4 {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    ;
    get balance() {
        return this._balance;
    }
}
let account3 = new Account4(1, 'William', 0, 'Garrett');
console.log(`Balance using getter ${account3.balance}`);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'William';
seats.A2 = 'Garrett';
seats.A3 = 'Chris';
seats['A4'] = 'Jake';
seats['A5'] = 'John';
seats['A6'] = 'Doug';
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
console.log('End of section 10');
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
    }
    walk() {
        console.log('Walking to class');
    }
    talk() {
        console.log('Talking about grades');
    }
}
let student = new Student('William', 'McGiffert', 30, 1118935);
student.walk();
student.talk();
console.log(student);
console.log('End of section 11');
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
let teacher = new Teacher('William', 'McGiffert', 30);
console.table(teacher);
console.log(teacher.fullName);
console.log('End of section 12');
console.log('');
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Student('Garrett', 'McGiffert', 30, 11186925),
    new Teacher('Jay', 'Glynn', 45),
    new Principal('Henry', 'Poltran', 49)
]);
console.log('End of section 13');
//# sourceMappingURL=ClassesIFacesOOP.js.map