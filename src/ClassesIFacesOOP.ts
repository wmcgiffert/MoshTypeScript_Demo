// ============ 1 Intro ============
/* 
    What youll learn:
    Intro to OOP
    Classes
    Constructor
    Properties & Methods
    Access Control Keyowrds
    Getters & Setters
    Static Members
    Index Signatures
    Inheritance
    Polymorphism
    Abstract Classes
    Interfaces 
*/

// ============ 2 What is OOP ============
/* 
    Programing paradigm::
    -Procedural
    -Functional
    -Object-Oriented
    -Event-Driven
    -Aspect-Oriented
*/

// ============ 3 Creating Classes ============
class Account {
    readonly id: number;
    owner: string;
    balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number, nickname?: string) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0');
        }
        this.balance += amount;
    }
}

// ============ 4 Creating Objects ============
let account = new Account(1, 'William', 0, 'Garrett');
console.log('Before deposit');
console.table(account);
account.deposit(10000);
console.log('After deposit');
console.table(account);
console.log(typeof account);
console.log(account instanceof Account);



// ============ 5 Read-Only & Optional Properties ============
// See ReadOnly designation in class above in section 3


// ============ 6 Access Control Keywords ============
class Account2 {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number, nickname?: string) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        this.nickname = nickname;
    }

    readBalance(): number {
        //does have permission to access private balance?
        return this._balance;
    }
    creditBalance(amount: number): string {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be greater than 0');
        }
        this._balance -= amount;
        return `Balance is now ${this._balance}`;
    }

    debtBalance(amount: number): string {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0');
        }
        this._balance += amount;
        return `Balance is now ${this._balance}`;
    }
}

let account2 = new Account2(1, 'William', 0, 'Garrett');
// account2.balance = -1; Balance is private and cannot be accessed outside of the class

// own experiment not part of tutorial
console.log(`Balance is ${account2.readBalance()}`);
console.log('After depositing 10000');
account2.debtBalance(10000);
console.log(`Balance is ${account2.readBalance()}`);
console.log('After crediting 10000');
account2.creditBalance(10000);
console.log(`Balance is ${account2.readBalance()}`);


// ============ 7 Parameter Properties ============
// Alternative way to initialze an instance of an object
class Account3 {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    // nickname?: string;

    constructor(public readonly id: number, public owner: string, private balance: number, public nickname?: string) { };

    readBalance(): number {
        return this.balance;
    }
}

// ============ 8 Getters & Setters ============
class Account4 {
    constructor(public readonly id: number, public owner: string, private _balance: number, public nickname?: string) { };
    get balance(): number {
        return this._balance;
    }
}
let account3 = new Account4(1, 'William', 0, 'Garrett');
console.log(`Balance using getter ${account3.balance}`);


// ============ 9 Index Signatues ============
class SeatAssignment {
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'William';
seats.A2 = 'Garrett';
seats.A3 = 'Chris';
seats['A4'] = 'Jake';
seats['A5'] = 'John';
seats['A6'] = 'Doug';


// ============ 10 Static Memembers ============

class Ride {
    private static _activeRides: number = 0;
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides(): number {
        return Ride._activeRides;
    }
}

let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
console.log('End of section 10');


// ============ 11 Inheritance ============
class Person {
    constructor(public firstName: string, public lastName: string, public age: number) { }
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    protected walk() {
        console.log('Walking');
    }
}

class Student extends Person {
    constructor(firstName: string, lastName: string, age: number, public studentId: number) {
        super(firstName, lastName, age);
    }
    // override walk() {
    //     console.log('Walking to class');
    // }

    talk() {
        console.log('Talking about grades');
    }
    takeTest() {
        this.walk();
        console.log('Taking a test');
    }
}

let student = new Student('William', 'McGiffert', 30, 1118935);
// student.walk();
student.talk();
console.log(student);
console.log('End of section 11');

// ============ 12 Method Overriding ============
class Teacher extends Person {
    override get fullName(): string {
        return `Professor ${super.fullName}`;
    }
}

let teacher = new Teacher('William', 'McGiffert', 30);
console.table(teacher);
console.log(teacher.fullName);
console.log('End of section 12');

// ============ 13 Polymorphism ============
console.log('');
class Principal extends Person {
    override get fullName() {
        return 'Principal ' + super.fullName;
    }
}

function printNames(people: Person[]) {
    console.table(people);
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

// ============ 14 Private vs Protected Members ============
console.log('');
console.log('Expected Results:');
console.log('Walking');
console.log('Taking a test');

console.log('Actual Results:');
student.takeTest();
console.log('End of section 14');

// ============ 15 Abstract Classes & Methods ============
abstract class Shape {
    constructor(public color: string) { }
    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }
    override render(): void {
        console.log('Rendering a circle');
    }
}

const circle = new Circle(1, "red");
console.log('')

circle.render();

console.log('')

console.log('End of section 15');
// ============ 16 Interfaces ===========



// ============ 17 Interfaces vs Types ===========