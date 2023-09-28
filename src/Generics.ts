// ============ 3 Generic Classes ===========
class KeyValuePair<T> {
    constructor(public key: T, public value: string) { };
}

let pair1 = new KeyValuePair<number>(1, 'a');
let pair2 = new KeyValuePair<string>('a', 'b');
let pair3 = new KeyValuePair<number>(3, 'c');

let pairs = [pair1,  pair2]; 
pairs.push(pair3); 


console.table(pairs);

// ============ 4 Generic Classes ===========
// ============ 5 Generic Classes ===========
// ============ 6 Generic Classes ===========
// ============ 7 Generic Classes ===========
// ============ 8 Generic Classes ===========
// ============ 9 Generic Classes ===========
