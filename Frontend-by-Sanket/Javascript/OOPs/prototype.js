function Product(n) {
  this.name = n;
}
let d = new Product("Android");

// after creating object we can add data member and member function

Product.prototype.display = function () {
  console.log("name of the product is", this.name);
};
//   Product.prototype.show = function () {
//     console.log("show me your profile picture", this.name);
