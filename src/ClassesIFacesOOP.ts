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