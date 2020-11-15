console.log("************** DELIVERABLE 02 *********************");
console.log("***************** Concat *********************");

let aArrayNum : Array<number> = [3, 5, 6, 1, 5];
let bArrayNum : Array<number> = [8, 7, 2, 4];

let aArrayStr : Array<string> = ['g', 'p', 'y', 'o'];
let bArrayStr : Array<string> = ['a', 'b', 'c'];

console.log(`Array Number: ${aArrayNum} - ${bArrayNum}`);
console.log(`Array String: ${aArrayStr} - ${bArrayStr}`);

// Concat
const concat = <T>(a : Array<T>, b : Array<T>): Array<T> => {
    let concatArray : Array<T> = [...a, ...b];
    return concatArray;
};

console.log("Concat function: ", concat(aArrayNum, bArrayNum));
console.log("Concat function: ", concat(aArrayStr, bArrayStr));

// Concat (optional)
let cArrayNum : Array<number> = [4, 8, 6];
let cArrayStr : Array<string> = ['t', 'u'];

const concatMultiple = <T>(a : Array<T>, b : Array<T>, ...args : Array<T>[]): Array<T> => {
    let concatArrayMutiple : Array<T> = concat(a,b);
    args.forEach(arrayArgs => concatArrayMutiple = concat(concatArrayMutiple, arrayArgs));
    return concatArrayMutiple;
};

console.log("ConcatMultiple (2) function: ", concatMultiple(aArrayNum, bArrayNum));
console.log("ConcatMultiple (2) function: ", concatMultiple(aArrayStr, bArrayStr));
console.log("ConcatMultiple (3) function: ", concatMultiple(aArrayNum, bArrayNum, cArrayNum));
console.log("ConcatMultiple (3) function: ", concatMultiple(aArrayStr, bArrayStr, cArrayStr));
console.log("ConcatMultiple (4) function: ", concatMultiple(aArrayNum, bArrayNum, cArrayNum, cArrayNum));
console.log("ConcatMultiple (4) function: ", concatMultiple(aArrayStr, bArrayStr, cArrayStr, cArrayStr));
