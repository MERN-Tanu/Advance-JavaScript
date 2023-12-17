class Product {
  #name; // private
  #price;
  // description;

  constructor(n, p, d) {
    this.#name = n;
    this.#price = p;
    this.description = d;
  }

  set Name(n) {
    if (typeof n == !"string") {
      console.log("Invalid name passed");
      return;
    }

    this.#name = n;
  }
  setPrice(p) {
    if (p < 0) return;
    this.#price = p;
  }
  get Name() {
    return this.#name;
  }

  getPrice(p) {
    return this.#price;
  }
  display() {
    //print the product
    console.log(this.#name, this.#price, this.description);
  }
}

const p = new Product("Bag", 300, "a cool bag");
p.name = "Android";
p.price = 2000;
// console.log(p);
console.log(p.name);
console.log(p.price);
