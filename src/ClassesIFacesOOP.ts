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

    constructor(id: number, owner: string, balance: number, nickname?: string){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.nickname = nickname;
    }

    deposit(amount: number): void{
        if(amount <= 0){
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

    constructor(id: number, owner: string, balance: number, nickname?: string){
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        this.nickname = nickname;
    }

    readBalance(): number{
        //does have permission to access private balance?
        return this._balance;
    }
    creditBalance(amount: number): string{
        if(amount <= 0){
            throw new Error('Withdrawal amount must be greater than 0');
        }
        this._balance -= amount;
        return `Balance is now ${this._balance}`;
    }

    debtBalance(amount: number): string{
        if(amount <= 0){
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
// ============ 8 Getters & Setters ============
// ============ 9 Index Signatues ============
// ============ 10 Static Memembers ============
// ============ 11 Inheritance ============
// ============ 12 Method Overriding ============
// ============ 13 Polymorphism ============
// ============ 14 Private vs Protected Members ============
// ============ 15 Abstract Classes & Methods ============
// ============ 16 Interfaces ===========