"use strict";
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(50000);
;
let mySize = 2;
console.log(mySize);
let user = [1, 'Mosh'];
user.push(1);
let numbers = [1, 2, 3];
let sales = 281330;
let course = 'TypeScript';
let is_published = true;
let level;
level = 1;
level = 'a';
console.log(sales, course, is_published, level);
function render(document) {
    console.log(document);
}
//# sourceMappingURL=index.js.map