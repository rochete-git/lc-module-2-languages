console.log("************** DELIVERABLE 01 *********************");
console.log("************ Array operations *********************");

let arrayNum : Array<number> = [3, 5, 6, 1, 5];
let arrayStr : Array<string> = ['a', 'b', 'c'];

console.log(`Array Number: ${arrayNum}`);
console.log(`Array String: ${arrayStr}`);

// Head
const head = <T>(array : Array<T>) : T => {
    let first : T;
    [first] = array;
    return first;
};

console.log("Head function: ", head(arrayNum));
console.log("Head function: ", head(arrayStr));

// Tail
const tail = <T>(array : Array<T>) : Array<T> => {
    let first : T;
    let rest: Array<T>;
    [first, ...rest] = array;
    return rest;
};

console.log("Tail function: ", tail(arrayNum));
console.log("Tail function: ", tail(arrayStr));

// Init
const init = <T>(array : Array<T>) : Array<T> => {
    let newArray : Array<T> = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};

console.log("Init function: ", init(arrayNum));
console.log("Init function: ", init(arrayStr));

// Last
const last = <T>(array : Array<T>) : T => {
    return array[array.length - 1];
};

console.log("Last function: ", last(arrayNum));
console.log("Last function: ", last(arrayStr));
