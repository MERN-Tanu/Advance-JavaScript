# What is Document Object Model?

# Scoping in JavaScript:

a). Parsing : Scope Resolution
b). Execution : To run the Code

1. Global scope
2. function scope
3. Block scope

# Difference b/w var and let

# BlockScope: let and const are block scope keyword

```
if(true){
var x = 10;
}
console.log(x);

Output: 10

if(false){
var x =10;
}
console.log(x);

output: undefined
```
# Function Scope: var keyword is function and global scope

// let won't allow re-Declarartion
// var allow re-Declaration

# IIFE = Immediate invoked fuunction expression

# Immediate = the moment we define it, then only we call it.

# Higher order function :

# Map is a higher order function available with arrays

These are function depends and opearte on other function
higher order function takes another function as an argument or return a function as argument and then execute the logic.

# Example:
```
function gun(){

<!-- some logic -->

}

<!-- This is higher order function -->

function fun(gun){

<!-- some logic -->

gun();
}
```
# Map Function

1. Map is a higher order function avaliable with arrays.
   2.It takes a function as an argument -> f.
2. It returns an array in which every value is actually populated by calling
3. function f with original array as argument

