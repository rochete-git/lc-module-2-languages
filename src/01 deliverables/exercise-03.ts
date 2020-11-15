console.log("************** DELIVERABLE 03 *********************");
console.log("*************** Clone Merge *********************");

// Clone
const sourceObject : Object = {name: "myName", surname: "mySurname", country: "myCountry"};
console.log("My sourceObject: ", sourceObject);

function clone (source: Object) : Object {
    let newObject : Object = {...source};
    return newObject;
};

console.log("My cloned object: ", clone(sourceObject));

// Merge
const targetObject : Object = {name: "newName", surname: "newSurname", age: 30, married: true };
console.log("My targetObject: ", targetObject);

function merge (source: Object, target: Object) : Object {
    let newObject : Object = {...target, ...source};
    return newObject;
};

console.log("My merged objects: ", merge(sourceObject, targetObject));

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log("Example merged objects: ", merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
