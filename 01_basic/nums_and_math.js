const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.73892

// console.log(otherNumber.toPrecision(2))

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'))
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -------------------- Maths ----------------------------

// console.log(Math)
// console.log(Math.abs(-10))
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(3.9))

for (let index = 0; index < 5; index++) {
    console.log(Math.floor(Math.random()*10) + 1)
}

//  function for getting random value between
const randInt = function(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min
}

console.log(randInt(10,20))