"use strict";
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
//# sourceMappingURL=AdvancedTypes.js.map