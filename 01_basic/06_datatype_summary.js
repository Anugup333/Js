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

// console.log(typeof bigNumber)

// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myFunction)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory in javascript 
// Stack ( Primitive Type ) ( Copy ) 
// Heap( Non- Primitive type ) (Reference)  

let myYoutubename = "Anuj"

let anothername = myYoutubename

// console.log(anothername)
// console.log(myYoutubename)
// anothername = "Chai aur code "
// console.log(anothername)
// console.log(myYoutubename)

// Because of Copy (Stack) of Primitive type 

let user = {
    email: "anuj@gmail.com",
    upi : "upiid",
}
let user2 = user

console.log(user)
console.log(user2)

user.email = "manoj@gmail.com"

console.log(user)
console.log(user2)

// Because of Reference (Heap) of Non-Primitive type 