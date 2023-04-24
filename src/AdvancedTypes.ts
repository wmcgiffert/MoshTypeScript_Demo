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

kgToLbs(10);
kgToLbs('10kg');

// ============ 4 Intersection Types ============
// ============ 5 Literal Types ============
// ============ 6 Nullable Types ============
// ============ 7 Optional Chaining ============
// ============ 8 The Nullish Coaelscing Operator ============
// ============ 9 Type Assertions ============
// ============ 10 Unkown Type ============
// ============ 11 Never Type ============
