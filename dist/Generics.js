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
let pairs = [pair1, pair2];
pairs.push(pair3);
pairs.forEach(pair => {
    console.log(pair);
});
console.table(pairs);
//# sourceMappingURL=Generics.js.map