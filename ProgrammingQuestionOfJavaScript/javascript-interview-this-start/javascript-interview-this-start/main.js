// What will be logged here?

// Task 1

// function getItem() {
//   console.log(this);
// }

// getItem();

/*
function getItem() {
  console.log(this);
}

getItem();
VM866:2 Window {window: Window, self: Window, document: document, name: '', location: Location, …}


*/

// Task 2

// const item = {
//   title: "Ball",
//   getItem() {
//     console.log("this", this);
//   },
// };

// item.getItem();

/*
this 
{title: 'Ball', getItem: ƒ}
getItem
: 
ƒ getItem()
title
: 
"Ball"
[[Prototype]]
: 
Object


*/

// Task 3
class Item {
  title = "Ball";
  getItem() {
    function someFn() {
      console.log("this", this);
    }
    someFn();
  }
}

const item = new Item();
item.getItem();

//  Output : this undefined
