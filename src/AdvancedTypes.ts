// ============ 2 Type Aliases ============
type Employee = {
    readonly id: number,
    name: string,
    retire:(date:Date) => void
}

let employee2: Employee = { 
    id: 1, 
    name: '',
    retire: (date:Date) => {
        console.log(date);
    }
};

// ============ 3 Union Types ============
function kgToLbs(weight: number | string): number{
    //Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    }
    else{
        return parseInt(weight) * 2.2;
    }
}

const weight1: number = kgToLbs(10);
const weight2: number = kgToLbs('10kg');
console.log(weight1, weight2); 
// ============ 4 Intersection Types ============
type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// ============ 5 Literal Types ============
type Quantity = 50 | 100;
let quantity: Quantity  = 50;

// ============ 6 Nullable Types ============
function greet(name: string | null){
    if(name){
        console.log(name.toUpperCase());
    }
    else{
        console.log('Hola');
    }
}
greet(null);

// ============ 7 Optional Chaining ============
type Customer = {
    birthDate: Date
}

function getCustBirthDate(id: number): Customer | null | undefined{
    return id===0 ? null: {birthDate: new Date()};
}

let customer = getCustBirthDate(0);
// if(customer!==null && customer!==undefined){{
//     console.log(customer.birthDate);
// }
// Optional property access operator
// console.log(customer?.birthDate);
console.log(customer?.birthDate?.toDateString());
// Optional element access operator
// customer?.[0]

// Optional call
let log: any = null;
log?.('a');

// ============ 8 The Nullish Coaelscing Operator ============
let speed: number | null = null;
let ride = {
    speed: speed ?? 30
}


// ============ 9 Type Assertions ============
// let phone = document.getElementById('phone') as HTMLInputElement;
let phone = <HTMLInputElement> document.getElementById('phone');
phone.value = '123-456-7890';

// ============ 10 Unkown Type ============
// function gMoneyrender(document: unknown){
//     // if(typeof document === 'string'){
//     //     document.toUpperCase();
//     // }
//     if(document instanceof CustomDefinedType){
//         document.toUpperCase();
//     }
//     document.move();
//     document.fly();
//     document.whatever();
// }

// ============ 11 Never Type ============
function reject(message: string): never{
    throw new Error(message);
}

function processEvents(): never{
    while(true){
        // Read a message from a queue
    }
}

// processEvents();
reject('Error');
// console.log('Hello World');
