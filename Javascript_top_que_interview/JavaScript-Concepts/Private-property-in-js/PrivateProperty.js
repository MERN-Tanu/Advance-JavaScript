class BankAccount {
  constructor() {
    this.name = "Bruce Sidhhi";
    this.pin = "123456";
  }

  getName() {
    return this.name;
  }

  getPin() {
    return this.pin;
  }
}

const details = new BankAccount();
console.log(details.getPin());
