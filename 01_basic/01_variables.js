const accountId = 144553
let accountEmail = "anuj@gmail.com"
var accountPassword = "12345"
accountCity = "noida"

// accountId = 2  // not allowed 

accountEmail = 'email'
accountPassword = "1234"
accountCity = "Ban"

/*
 Prefer not to use var 
 because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity])
