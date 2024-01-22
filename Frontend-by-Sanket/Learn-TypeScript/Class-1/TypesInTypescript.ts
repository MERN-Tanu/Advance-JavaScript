/*
Types in TypeScript

Below are all primitive types in TS

string -> store text
number -> integers, real
boolean 
undefined
null
bigint
symbol

------------

var <variable_name> : number = <value>

this is called Type Annotation or Type Signature


------------------
*/

let id: number = 5;
let firstName: String = "tanu";
let firstNam = "tanu"; // TS understands firstName will store strings
// firstName=12; // TS compiler throws an error

var lastNmae: string = "Singh";
// lastNmae = 13; //TS compiler throws an error
console.log(id, firstName);

// Union of Types

let userId: number | string = "26";
userId = 10;

let x: any = 10;
x = "tanu";
x = false;
console.log(x);

/*

Arrays in TypeScript:

let <variable_name> : type[]= [value1, value2, ....];

 */

let arr: number[] = [1, 2, 3, 4, 5];
let hetero: any[] = [1, 2, false, "123", null];
console.log(arr, hetero);

/*
output: 

  [1, 2, 3, 4, 5],  [1, 2, false, "123", null] 

*/

let data: (number | string | boolean)[] = [1, "tanu", true];

console.log(hetero, data);

/*
 [1, 2, false, "123", null],  [1, "tanu", true] 
*/
