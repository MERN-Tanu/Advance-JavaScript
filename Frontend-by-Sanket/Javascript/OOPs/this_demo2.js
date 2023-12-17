let Products = {
  arr: [
    {
      name: "Iphone",
      price: 100000,
      description: "The new apple iphone 13 pro",
      rating: 4.8,
      getCategory: function print() {
        console.log(this.category);
      },
    },
    {
      name: "Macbook M2",
      price: 125000,
      description: "The new apple macbook m2",
      rating: 4.9,
      getCategory: function print() {
        console.log(this.category);
      },
    },
  ],
  category: "Electronics",
};

Products.arr[0].getCategory();
