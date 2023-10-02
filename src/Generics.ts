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
    let base = url;
    console.log(base);
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

let value = new Person2('Mom');

function echo<T extends Person2>(value: T): T {
    console.log(value);
    return value;
}
echo(value);

console.log('End of Section 6');
// ============ 7 Extending Generic Classes ===========


// ============ 8 The keyof Operator ===========

// ============ 9 Type Mapping ===========