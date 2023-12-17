function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.description = d;
}

const p = new Product("Hema", 100, "I like Hema");
console.log(p);
