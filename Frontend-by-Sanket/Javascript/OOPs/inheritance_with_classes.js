/**function A(){}
undefined
function B(){}
undefined
new A();
A {}[[Prototype]]: Bconstructor: ƒ A()[[Prototype]]: Object
new B();
B {}[[Prototype]]: Objectconstructor: ƒ B()[[Prototype]]: Object
Object.setPrototypeOf(A.prototype,B.prototype);
*/
