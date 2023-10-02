"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    ;
}
let pair1 = new KeyValuePair(1, 'a');
let pair2 = new KeyValuePair(2, 'b');
let pair3 = new KeyValuePair(3, 'c');
let pair4 = new KeyValuePair(4, 'd');
let pairs = [pair1, pair2];
pairs.push(pair3);
pairs.push(pair4);
console.table(pairs);
console.log('End of Section 3');
class ArrayUtils {
    static wrapInArray(input) {
        return [input];
    }
}
let number = ArrayUtils.wrapInArray(1);
console.log(number);
console.log('End of Section 4');
function fetch(url) {
    let base = url;
    console.log(base);
    return { data: url, error: null };
}
let resultU = fetch({ username: 'gmac2790' });
let resultP = fetch({ title: 'SWE .Net' });
console.log('End of Section 5');
class Person2 {
    constructor(name) {
        this.name = name;
    }
    ;
}
class Customer2 extends Person2 {
}
let value = new Person2('Mom');
let value2 = new Customer2('Mom2');
function echo(value) {
    console.log(value);
    return value;
}
echo(value);
echo(value2);
console.log('End of Section 6');
;
class RawMaterials {
    constructor(name, price, state) {
        this.name = name;
        this.price = price;
        this.state = state;
    }
    ;
}
;
class Store {
    constructor() {
        this.items = [];
    }
    add(obj) {
        this.items.push(obj);
    }
    displayStore() {
        this.items.forEach(item => {
            console.log(item);
        });
    }
    getStoreTotal() {
        let total = 0.00;
        this.items.forEach(item => {
            let priceAmount = item.price;
            total += priceAmount;
        });
        console.log(`The total value of your store is $${total.toFixed(2)}`);
    }
}
let store = new Store();
store.add({ name: 'drone', price: 2999.89 });
store.add({ name: 'drone 2', price: 2999.89 });
store.add({ name: 'drone 3', price: 2999.89 });
store.add({ name: 'drone 4', price: 2999.89 });
let temp = new RawMaterials('drone 4', 2999.89, 'new');
store.add(temp);
store.displayStore();
store.getStoreTotal();
console.log('End of Section 7');
//# sourceMappingURL=Generics.js.map