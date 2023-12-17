**Class Keyword**
You can create blueprint
e.g.

```js
class <name>{
    ---- Properties |
    ----            |
                      -> we can create real life entities
    ---- Behaviour  |    to create and manage the entities
    ----            |    "new" , "this"
}

```

# ProtoType in JavaScript

**Prototypes :**
Object are created by constructor calls using new keyword

classes : Blueprint
Object : Instances

**what is Prototypes?**

It is a mechanism using which JS objects inherits features from one another.

![1702823432349](image/Readme/1702823432349.png)

![1702823970454](image/Readme/1702823970454.png)

**Every object has a Prototypes property with itself.**

```js
function Product(n) {
  this.name = n;
}
let d = new Product("Android");

// after creating object we can add data member and member function

Product.prototype.display = function () {
  console.log("name of the product is", this.name);
};
Product.prototype.show = function () {
  console.log("show me your profile picture", this.name);
};
```

![1702826954164](image/Readme/1702826954164.png)

**Hidden Relationship**

![1702828637806](image/Readme/1702828637806.png)

`Dunder Proto : __proto__`

![1702829040125](image/Readme/1702829040125.png)

![1702829927954](image/Readme/1702829927954.png)

![1702830816335](image/Readme/1702830816335.png)

# Inheritance in JS :

```js
function A(){}
undefined

function B(){}
undefined

new A();

A {}

[[Prototype]]: Bconstructor: ƒ A()[[Prototype]]: Object

new B();

B {}

[[Prototype]]: Objectconstructor: ƒ B()[[Prototype]]: Object

Object.setPrototypeOf(A.prototype,B.prototype);


```

![1702831886623](image/Readme/1702831886623.png)

![1702830995914](image/Readme/1702830995914.png)
