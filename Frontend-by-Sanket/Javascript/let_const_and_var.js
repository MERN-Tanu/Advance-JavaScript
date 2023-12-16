//  Temporal dead zone :
/*It is the time since the 
 let variable is hoisted till it is initailaise some value the time in between is known as temporal zone. */
// error : Cannot access 'a' before initialization

//  Case-1
console.log(a);
// Temporal dead zone start
let a = 10;
// Temporal dead zone end
var b = 100;

// output : error : Cannot access 'a' before initialization
//

// Different types of error
/**
 * 1. Reference Error
 * 2. Syntax Error
 * 3. Type Error
 */

// Case -2
console.log("hello");
// let is more strict than var
let a = 10;
let a = 100;

// output : Syntax Error : Identifier 'a' has already been declared

// Case - 3
