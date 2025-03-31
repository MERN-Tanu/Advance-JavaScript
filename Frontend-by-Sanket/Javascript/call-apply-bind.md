# CI CD

```
https://github.com/singhsanket143/CRM_App_Backend_TS/blob/master/README.md
```


**The call and apply Methods**

**Example 0**
```js
 let name = {
       firstname : "tanu",
       lastname: "Singh",
    printFullName : function(hometown,state){
           // this : refer to (name) (this :calling context)
             consol.log(this.firstnmae + "" + this.lastname + "from " + hometown + "," + state );
}
}

// name.printFullName();
printFullName.call(name,"Kanpur","UP");

let name2 = {
    firstname : "tannnu",
    lastname: "Yadav",
}

// function borrowing
// name.printFullName.call(name2,"Mumbai","Maharashtra");

// 1. call method
printFullName.call(name2,"Mumbai",Maharashtra");

// 2. apply method (name2,[array of list will pass in apply method in 2nd argument])

printFulName.apply(name2,["Mumbai","Maharashtra"]);

// bind method

let printMyName = printFullName.bind(name1,"Mumbai","Maharashta");
console.log(printFullName);
printMyName();

```



**Example: 1**

```JS
const indigo = {
  airline: "Indigo",
  code: "Ind",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code} with filght number ${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};

indigo.book(239, "tanu");
indigo.book(635, "tanuaa");

const akasha = {
  airline: "Akasha",
  code: "AKA",
  bookings: [],
};

const book = indigo.book;

// Does NOT work
// book(23, "Sarah Williams");

// // Call method
// book.call(akasha, 238, "Surjeet");
// console.log(akasha);

// book.call(indigo, 239, "Mary Cooper");
// console.log(indigo);

const AirIndia = {
  airline: "Air India",
  code: "Air",
  bookings: [],
};

//   book.call(AirIndia, 583, 'Mary Cooper');

//   // Apply method
//   const flightData = [583, 'George Cooper'];
//   book.apply(AirIndia, flightData);
// book.apply(AirIndia, [583, "George Cooper"]);

//   book.call(AirIndia, ...flightData);

///////////////////////////////////////
// The bind Method
// book.call(AirIndia, 23, 'Sarah Williams');
// const x=function(){
//     //
// }
const bookIndigo = book.bind(indigo);
const bookAkasha = book.bind(akasha);
const bookAirIndia = book.bind(AirIndia);

bookIndigo(456, "dipika");
bookAkasha(457, "dipu");
bookAirIndia(836, "pk");
```

#Example:2

```JS

const student = {
  sworkshop: "ethical hacking",
  srollno: 78,
  branch: [],
  enrollment(enrollmentno, name, branch) {
    console.log(
      `${enrollmentno} ${name} is enrolled for ${this.sworkshop} and their rollno is ${this.srollno}`
    );
    this.branch.push({
      stu: `${this.sworkshop} ${name}`,
      branch,
      enrollmentno,
    });
  },
};

// student.enrollment(125425243, "Priya", "Computer Science");

const newstudent = {
  sworkshop: "Machine Learning",
  srollno: 12,
  branch: [],
};

const selectedstudent = {
  sworkshop: "blockchain",
  srollno: 90,
  branch: [],
};

const enrollment = student.enrollment;

// call function

enrollment.call(newstudent, 3546477, "Kajal", "Information Technology");
console.log(newstudent);
enrollment.call(student, 1247487, "Priya", "Mechnical");
console.log(student);
enrollment.call(selectedstudent, 12453657, "Rishi", "Civil");
console.log(selectedstudent);

// apply function

enrollment.apply(newstudent, [2435368, "Jake", "Information technology"]);
console.log(newstudent);
enrollment.apply(student, [1254674, "Richeal", "Cs"]);
console.log(student);
enrollment.apply(selectedstudent, [5467748, "Patel", "ME"]);
console.log(selectedstudent);

//  Bind function

const enrollnewstudent = enrollment.bind(newstudent);
const enrollstudent = enrollment.bind(student);
const enrollselectedstudent = enrollment.bind(selectedstudent);

enrollnewstudent(3647467, "Olga", "IT");
enrollstudent(4758859, "Shradha", "CS");
enrollselectedstudent(567889, "Shreya", "CS");


```

```js
// Currying function in Js

/*
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = function (y) {
  let x = 2;
  console.log(2 * y);
};

let multiplyByten = multiply.bind(this, 10);
multiplyByten(5);
console.log(multiplyByten);

let multiplybySix = multiply.bind(this, 6);
multiplybySix(5);
console.log(multiplybySix);
*/
// ---------------------- Currying with Closures --------

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

/*
It won't work,won't use bind with multiply

let multiplybySix = multiply.bind(this, 6);
multiplybySix(4);

console.log(multiplybySix);

let multiplyByten = multiply.bind(this, 10);
multiplyByten(3);
console.log(multiplyByten);
*/

let multiplybySix = multiply(6);
multiplybySix(7);

let multiplyByten = multiply(10);
multiplyByten(6);
```

<-- **Debouncing in JavaScript** -->

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tanu Singh</title>
  </head>
  <body>
    <input type="text" onkeyup="betterFunction()" />
    <script src="debouncing.js"></script>
  </body>
</html>
```

```js
let count = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("fetching data :", count++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);
```

------------ **Throttling In JavaScript**-------------

```js
// it is used for performing optimisation
//  rate limit the fn call and fn execution
// when user press button again and again - onclick
/**
 * With Throttling function:
 With throttling, you limit(delay) the frequency of function invocations.
 For example, you might decide to execute a function at most once every 1500 milliseconds.
 This prevents the function from being called too frequently and helps maintain a smoother performance.
 * 
 */

//  Rough code of throttlig
/**
 * const expensive = () =>{
 * console.log("expensive");
 *
 * window.addEventListner("resize",expensive)
 *                           ("""""",betterexpensive)
 *
 * using throttling
 *
 * const betterExperience = throttling(expensive,limit)
 *                           ("""""",100)
 *
 *
 * }
 *
 */
// context = object
// args = array inside an array  : array = [1,2,3,4]

const throttling = (func, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);

      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
      console.log(context);
    }
  };
};
```
