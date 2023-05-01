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
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void{
        if(amount <= 0){
            throw new Error('Deposit amount must be greater than 0');
        }
        this.balance += amount;
    }
}

// ============ 4 Creating Objects ============


// ============ 5 Read-Only & Optional Properties ============
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