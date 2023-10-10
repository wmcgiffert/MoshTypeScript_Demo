// ============ 3 Generic Classes ===========
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) { };
}

let pair1 = new KeyValuePair<number, string>(1, 'a');
let pair2 = new KeyValuePair<number, string>(2, 'b');
let pair3 = new KeyValuePair<number, string>(3, 'c');
let pair4 = new KeyValuePair(4, 'd');
let pairs = [pair1, pair2];
pairs.push(pair3);
pairs.push(pair4);
// Interesting hack throws an ts error but runs in js
// pairs.forEach(pair => {
//     console.log(pair);
// });
console.table(pairs);
console.log('End of Section 3');

// ============ 4 Generic Functions =========
class ArrayUtils {
    static wrapInArray<T>(input: T): T[] {
        return [input];
    }
}
let number = ArrayUtils.wrapInArray(1);
console.log(number);
console.log('End of Section 4');


// ============ 5 Generic Interfaces ===========
// http://mywebsitee.com/users
// http://mywebsitee.com/products

interface Result<T> {
    data: T | null,
    error: string | null
}
function fetch<T>(url: T): Result<T> {
    console.log(url);
    return { data: url, error: null };
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

let resultU = fetch<User>({ username: 'gmac2790' });
let resultP = fetch<Product>({ title: 'SWE .Net' });

console.log(`User:  ${JSON.stringify(resultU)}  Product: ${JSON.stringify(resultP)}`);

console.log('End of Section 5');
// ============ 6 Generic Constraints ===========
// function echo<T extends number | string>(value: T): T {
//     console.log(value);
//     return value;
// }
// echo('Hi Mom');
// doesnt work becuase bool is not included
// echo(true);

// function echo<T extends { name: string }>(value: T): T {
//     console.log(value);
//     return value;
// }
// let value = { name: 'Mom' }
// echo(value);

class Person2 {
    constructor(public name: string) { };
}

class Customer2 extends Person2 {

}

let value = new Person2('Mom');
let value2 = new Customer2('Mom2');

function echo<T extends Person2>(value: T): T {
    console.log(value);
    return value;
}
echo(value);
echo(value2);
console.log('End of Section 6');
// ============ 7 Extending Generic Classes ===========
interface Product2 {
    name: string;
    price: number;
};
class RawMaterials implements Product2 {
    constructor(public name: string, public price: number, public state: string) { };
};

class Store<T extends Product2> {
    protected _items: T[] = [];

    add(obj: T): void {
        this._items.push(obj);
    }
    displayStore(): void {
        // for (let index = 0; index < this._items.length; index++) {
        //     const element = this._items[index];
        //     console.log(element);
        // }
        this._items.forEach(item => {
            console.log(item);
        })
    }
    getStoreTotal(): void {
        let total: number = 0.00;
        this._items.forEach(item => {
            let priceAmount: number = item.price;
            total += priceAmount;
        })
        console.log(`The total value of your store is $${total.toFixed(2)}`);
    }
}

class CompressibleStore<T extends Product2> extends Store<T>{
    compress() { };
}

class SearchableStore<T extends Product2 & { name: string }> extends Store<T>{
    find(name: string): void {
        let count: number = 0;
        this._items.find(obj => {
            if (obj.name.includes(name)) {
                count++;
                console.log(`Name: ${obj.name} Price:${obj.price}`);
            }
        })
        console.log(`There are ${count} items named ${name}`);
    }
}

let store = new Store<Product2>();
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

// ============ 8 The keyof Operator ===========
interface Product3 {
    name: string;
    price: number;
};

class Store2<T>{
    protected _items: T[] = [];

    add(obj: T): void {
        this._items.push(obj);
    }   
    find (property: string , values: unknown): T | undefined{
        return this._items.find(obj => obj[property] === values);
    }
}


// ============ 9 Type Mapping ===========