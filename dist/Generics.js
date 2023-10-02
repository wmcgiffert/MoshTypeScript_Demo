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
class ArrayUtils {
    static wrapInArray(input) {
        return [input];
    }
}
let number = ArrayUtils.wrapInArray(1);
console.log(number);
function fetch(url) {
    let base = url;
    console.log(base);
    return { data: url, error: null };
}
let resultU = fetch({ username: 'gmac2790' });
let resultP = fetch({ title: 'SWE .Net' });
//# sourceMappingURL=Generics.js.map