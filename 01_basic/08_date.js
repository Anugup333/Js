//  Dates 

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(typeof myDate)


// let myCreateDate = new Date(2025,0,23)
// let myCreateDate = new Date(2025,0,23,5,3)
let myCreateDate = new Date("01-14-2025")
// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth() + 1 ) // 0 se start 
console.log(newDate.getDay())  // sunday is 0
console.log()