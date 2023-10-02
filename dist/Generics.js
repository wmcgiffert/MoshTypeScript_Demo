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
let value = new Person2('Mom');
function echo(value) {
    console.log(value);
    return value;
}
echo(value);
console.log('End of Section 6');
//# sourceMappingURL=Generics.js.map