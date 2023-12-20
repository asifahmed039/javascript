                                // Datatype conversion confusion

let score="33abc"// 33abc is not a number.
//put score with null, boolean value t/f ,string  "asif",
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);//its convert the string or others datatype into number datatype.
console.log(typeof valueInNumber);
console.log(valueInNumber);// its give NaN(not a number)
                    //"33"=>33
                    //"33abc=>NaN"
                    //true=>1 or false=>0

//Boolean datatype
let isLoggedIn="";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);
                                //1=>true
                                //34=>true
                                //""=>false
                                //"asif"=>true

//string datatype
let someNumber=44;
let stringNumber=String(someNumber);
console.log(typeof(stringNumber));
console.log(stringNumber);
