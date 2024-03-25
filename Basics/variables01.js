const accountId = 144553
let accountEmail = "swastik@google.com"
var accountPassword = "12354"
accountCity = "Kolkata"

/*
Prefer not to use 'var' because of the issue in block scope and functional scope
*/
// accountId =56 //not allowed
accountEmail="mullick@google.com"
accountPassword="35498"
accountCity="Khardaha"
let accountState;
console.log(accountCity);

table=[accountId, accountEmail, accountPassword, accountCity, accountState]
console.table(table)