// Primitive  Data type :

// 7 Type: String, Number , Boolean, null, undefined, symbol, 
// BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId )  // false

const bigNumber = 23453565468n
// console.log(typeof bigNumber);  // bigint


// Reference Data Type :

// Array , Objects , Functions 

const heros = ['shaktiman','naagraj','doga']

let myObj = {
    name: "Anuj",
    age: 22,
}

const myFunction = function(){
    console.log(" Hello World ")
}

console.log(typeof bigNumber)

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)

