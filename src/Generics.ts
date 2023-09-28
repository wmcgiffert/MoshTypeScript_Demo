// ============ 3 Generic Classes ===========
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) { };
}

let pair1 = new KeyValuePair<number, string>(1, 'a');
let pair2 = new KeyValuePair<number, string>(2, 'b');
let pair3 = new KeyValuePair<number, string>(3, 'c');
let pair4 = new KeyValuePair(4, 'd');

let pairs = [pair1,  pair2]; 
pairs.push(pair3); 
pairs.push(pair4); 
// Interesting hack throws an ts error but runs in js
// pairs.forEach(pair => {
//     console.log(pair);
// });

console.table(pairs);

// ============ 4 Generic Functions ===========



// ============ 5 Generic Classes ===========
// ============ 6 Generic Classes ===========
// ============ 7 Generic Classes ===========
// ============ 8 Generic Classes ===========
// ============ 9 Generic Classes ===========
