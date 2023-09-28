"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    ;
}
let pair1 = new KeyValuePair(1, 'a');
let pair2 = new KeyValuePair('a', 'b');
let pair3 = new KeyValuePair(3, 'c');
let pairs = [pair1, pair2];
pairs.push(pair3);
console.table(pairs);
//# sourceMappingURL=Generics.js.map