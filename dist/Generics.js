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
    console.log(url);
    return { data: url, error: null };
}
let resultU = fetch({ username: 'gmac2790' });
let resultP = fetch({ title: 'SWE .Net' });
console.log(`User:  ${JSON.stringify(resultU)}  Product: ${JSON.stringify(resultP)}`);
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
        this._items = [];
    }
    add(obj) {
        this._items.push(obj);
    }
    displayStore() {
        this._items.forEach(item => {
            console.log(item);
        });
    }
    getStoreTotal() {
        let total = 0.00;
        this._items.forEach(item => {
            let priceAmount = item.price;
            total += priceAmount;
        });
        console.log(`The total value of your store is $${total.toFixed(2)}`);
    }
}
class CompressibleStore extends Store {
    compress() { }
    ;
}
class SearchableStore extends Store {
    find(name) {
        let count = 0;
        this._items.find(obj => {
            if (obj.name.includes(name)) {
                count++;
                console.log(`Name: ${obj.name} Price:${obj.price}`);
            }
        });
        console.log(`There are ${count} items named ${name}`);
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
let search = new SearchableStore();
search.add({ name: 'drone', price: 2999.89 });
search.add({ name: 'drone 2', price: 2999.89 });
search.add({ name: 'drone 3', price: 2999.89 });
search.add({ name: 'drone 4', price: 2999.89 });
let temp2 = new RawMaterials('drone 4', 2999.89, 'new');
search.add(temp2);
search.find('drone');
console.log('End of Section 7');
;
class Store2 {
    constructor() {
        this._items = [];
    }
    add(obj) {
        this._items.push(obj);
    }
    find(property, values) {
        return this._items.find(obj => obj[property] === values);
    }
}
let store2 = new Store2();
store2.add({ name: 'drone', price: 2999.89 });
let pName = store2.find('name', 'drone');
let pPrice = store2.find('price', 2999.89);
console.log(pName);
console.log(pPrice);
console.log('End of Section 8');
;
let pProduct = {
    name: 'Drone',
    price: 25.99
};
let pPerson = {
    name: 'Garrett',
};
console.log(pProduct);
console.log(pPerson);
console.log('End of Section 9');
console.log('1: Convert the function below to a generic function:functionecho(arg) { return arg; }');
function echo1(arg) { return arg; }
console.log('function echo1<T>(arg:T): T{return arg;}');
console.log('2: When compiling the following piece of code, we get an error saying Property name does not exist on type T. How can we solve this problem? An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class.  interfaceUser { userId:number; username:string;}•Given the following interface, what does keyof User return');
console.log('extend the funciton with an interface');
console.log('3: An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class.');
console.log('Class Entity<T>{ consturctor(public id:T) {} }');
console.log('4: Given the following interface, what does keyof User return?');
console.log('It returns a union of the properties of User: userId| username');
//# sourceMappingURL=Generics.js.map