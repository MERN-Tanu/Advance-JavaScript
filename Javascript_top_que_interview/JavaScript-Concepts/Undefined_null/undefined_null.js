/* Example-1

        undefined:

        When a variable is declared but not assigned a value, it is undefined by default.
        A function without a return statement also returns undefined.
        If you access an object property or an array 
        element with a nonexistent key/index, 
        the result is undefined.

        let x;
        console.log(x); // undefined

        function example() {}
        console.log(example()); // undefined

        let obj = {};
        console.log(obj.property); // undefined




        let x;
        console.log(x); // undefined
        console.log(typeof x);  // undefined

*/

/*      Example-2

        let x = 9;
        console.log(x); // 9
        console.log(typeof x); // number

*/

/*          Null :
   
            let x = null;
            console.log(x); // null

*/
/*
Q.1) What is "undefined" in JavaScript ?
Q.2) What will be the output of undefined==null & undefined===null ? Why ?
Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)

*/

//Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)

let x = undefined;
console.log(x);

// output: undefined
