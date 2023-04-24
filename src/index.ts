// ========== 9 Objects ==========
// How to do it if you haven't declared the types already
// let employee:Employee = {
//     readonly id: number,
//     name: string,
//     retire:(date:Date) => void} 
let employee = {    //declared type in AdvancedTypes.ts
    id: 1, 
    name: '',
    retire: (date:Date) => {
        console.log(date);
    }
};



// ========== 8 Functions ==========
function calculateTax(income: number, taxYear = 2022): number{
    if(taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(50_000); 

// ========== 7 Enums ==========
const enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

// ========== 6 Tuples ==========
let user: [number, string] = [1,'Mosh'];
user.push(1);

// ========== 5 Arrays ==========
let numbers: number[] = [1,2,3];


// ========== 5 Any Type ==========
let sales: number = 281_330;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;
level = 1;
level = 'a';



console.log(sales,course,is_published,level);

function render(document:any){
    console.log(document);
}