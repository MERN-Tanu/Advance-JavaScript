let iphone = {
  name: "Iphone 13 pro",
  price: 100000,
  description: "The new apple iphone 13 pro",
  rating: 4.8,

  display() {
    console.log(this);
  },
};

let macbook = {
  name: "Macbook M2",
  price: 125000,
  description: "The new apple Macbook m2",
  rating: 4.9,

  display() {
    console.log(this);
  },
};
console.log(iphone, macbook);

/**
 *{
  name: 'Iphone 13 pro',
  price: 100000,
  description: 'The new apple iphone 13 pro',
  rating: 4.8,
  display: [Function: display]
} {
  name: 'Macbook M2',
  price: 125000,
  description: 'The new apple Macbook m2',
  rating: 4.9,
  display: [Function: display]
}
 */
