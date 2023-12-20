console.log("Asif Ahmed")
const accountId=1999;
let accountEmail="asifahmed331999@gmail.com"
var accountpassword="12345"

accountCity="Jaipur"  //this is also possible but not used (not good practice)

let accountState;  // accountSatate variable contain Undifine .

//   accountId=2000;// not allowed const value not change 
accountEmail="faiz@gmail.com"
accountpassword="1234567"
accountCity="Hyderabad"

console.log(accountId);
console.table([accountEmail,accountId,accountpassword,accountCity,accountState]);

/* prefer not to use var 
because of issue in block scope and functional scope
 */