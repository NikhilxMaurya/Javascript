const accountId = 1234
let accountEmail = "abc@gmail.com"
var accounttPassword = "456"
accountCity = "Delhi"
// accountId = 4321 not allowed
accountEmail = 'xyz'
accounttPassword = "654"
accountCity = "Noida"
let accountState = "Active";
let userLoggedin = true;
console.log(accountId);
/*
    Prefer not to use var because of issue in block scope and functional scope.
*/

console.table([accountEmail, accountId, accounttPassword, accountCity, accountState])
console.log(userLoggedin);
