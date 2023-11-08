# Advance JavaScript Concepts :

# 1.Coercion :
In JavaScript, coercion is the automatic conversion of values from one data type to another, typically performed during operations or comparisons involving different data types.
For example, if you try to add a string and a number using the "+" operator, JavaScript will convert the number to a string and concatenate the two values.
 
Coercion happens implicitly during operations or comparisons, where JavaScript automatically converts values to make them compatible. Coercion occurs automatically in JavaScript, allowing values of different data types to be used together in operations or comparisons.

# There are two types of coercion in JavaScript:

# implicit
implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done by the developer.
Implicit coercion is the most common type of coercion.
It happens automatically when JavaScript needs to convert a value from one data type to another.
For example, if you try to add a string and a number using the "+" operator, JavaScript will convert the number to a string and concatenate the two values.

# Explicit
Explicit coercion is done by the developer. It is usually used to force a value to a specific data type.
For example, if you want to convert a string to a number, you can use the Number() function.
Coercion can be used to make JavaScript more flexible and allow developers to use different data types together. However, it can also lead to errors if the developer is not careful.
Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.

In case the behavior of the implicit conversion is not sure, the constructors of a data type can be used to convert any value to that datatype,

like the Number(), String() or Boolean() constructor.

E.g:

1. Number to String Conversion:

``` Javascipt
   // The Number 10 is converted to
   // string '10' and then '+'
   // concatenates both strings
   var x = 10 + '20';
   var y = '20' + 10;

// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
var z = true + '10';

console.log(x);
console.log(y);
console.log(z);

Output:
1020
2010
true10
```

1. String to Number Conversion: When an operation like subtraction (-), multiplication (\*), division (/) or modulus (%) is performed, all the values that are not numbers are converted into the number data type, as these operations can be performed between numbers only. Some examples of this are shown below.

E.g:

``` Javascipt
// The string '5' is converted
// to number 5 in all cases
// implicitly
var w = 10 - '5';
var x = 10 \* '5';
var y = 10 / '5';
var z = 10 % '5';

console.log(w);
console.log(x);
console.log(y);
console.log(z);

Output:
5
50
2
0

```

3. Boolean to Number: When a Boolean is added to a Number, the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values. A Boolean value can be represented as 0 for ‘false’ or 1 for ‘true’. Some examples of this are shown below.

``` Javascipt
 The Boolean value true is
 converted to number 1 and
 then operation is performed
var x = true + 2;

// The Boolean value false is
// converted to number 0 and
// then operation is performed
var y = false + 2;

console.log(x);
console.log(y);

Output:
3
2

```

1. The Equality Operator: The equality operator (==) can be used to compare values irrespective of their type. This is done by coercing a non-number data type to a number. Some examples of this are shown below:
   Example:

``` Javascipt
// Should output 'true' as string '10'
// is coerced to number 10
var x = (10 == '10');

// Should output 'true', as boolean true
// is coerced to number 1
var y = (true == 1);

// Should output 'false' as string 'true'
// is coerced to NaN which is not equal to
// 1 of Boolean true
var z = (true == 'true');

console.log(x);
console.log(y);
console.log(z);

Output:
true
true
false
```

ToPrimitive :

1. ToPrimitive(input,preferred type(optional))
   input: (converts the input into non-object-type)
2. Preferred type(optional): Incase where input can be converted to multiple type,we take decision using this.

input -> type1 -> Preferred type
type2
type3
