//  array 

const myArr = [0,1,2,3,4,5]
const myHeros = ['shaktiman', 'naagraj']
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1])


//  Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(3))

// console.log(myArr)

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice splice 

console.log("A ",myArr)

const myn1 = myArr.slice(0,3)

console.log(myn1)
console.log("B ",myArr)
console.log(typeof myn1)

const myn2 = myArr.splice(0,3)

console.log(myn2)
console.log("C ",myArr)
console.log(typeof myn2)