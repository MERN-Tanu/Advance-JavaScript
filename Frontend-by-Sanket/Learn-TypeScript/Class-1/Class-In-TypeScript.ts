class Product {
  name: string;
  price: number | undefined;
  readonly category: string;
  readonly tags: string[];

  constructor(name: string, category: string, price?: number) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.tags = ["electronics", "mobile"];
  }

  display(): void {
    console.log("Product name is", this.name, "and price is", this.price);
  }

  setPrice(p: number): void {
    if (p <= 0) return;
    this.price = p;
  }

  //   buggyFunction(): void {
  //     this.category = "";
  //   }
}

const p1 = new Product("Iphone", "promax", 100000);
p1.price = 200000;
p1.setPrice(-20);
// p1.category = "";
const arr = [10, 20];
arr[0] = 0;
console.log(p1);

/*
Product{
    name: "Iphone",
    Price: 100000
}
*/
