"use strict";
var _a;
let employee2 = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
const weight1 = kgToLbs(10);
const weight2 = kgToLbs('10kg');
console.log(weight1, weight2);
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola');
    }
}
greet(null);
function getCustBirthDate(id) {
    return id === 0 ? null : { birthDate: new Date() };
}
let customer = getCustBirthDate(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDate) === null || _a === void 0 ? void 0 : _a.toDateString());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let phone = document.getElementById('phone');
phone.value = '123-456-7890';
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
reject('Error');
//# sourceMappingURL=AdvancedTypes.js.map