// The call and apply Methods
const indigo = {
  airline: "Indigo",
  code: "Ind",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code} with filght number ${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};

indigo.book(239, "tanu");
indigo.book(635, "tanuaa");

const akasha = {
  airline: "Akasha",
  code: "AKA",
  bookings: [],
};

const book = indigo.book;

// Does NOT work
// book(23, "Sarah Williams");

// // Call method
// book.call(akasha, 238, "Surjeet");
// console.log(akasha);

// book.call(indigo, 239, "Mary Cooper");
// console.log(indigo);

const AirIndia = {
  airline: "Air India",
  code: "Air",
  bookings: [],
};

//   book.call(AirIndia, 583, 'Mary Cooper');

//   // Apply method
//   const flightData = [583, 'George Cooper'];
//   book.apply(AirIndia, flightData);
// book.apply(AirIndia, [583, "George Cooper"]);

//   book.call(AirIndia, ...flightData);

///////////////////////////////////////
// The bind Method
// book.call(AirIndia, 23, 'Sarah Williams');
// const x=function(){
//     //
// }
const bookIndigo = book.bind(indigo);
const bookAkasha = book.bind(akasha);
const bookAirIndia = book.bind(AirIndia);

bookIndigo(456, "dipika");
bookAkasha(457, "dipu");
bookAirIndia(836, "pk");
//   lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
//   };
//   // lufthansa.buyPlane();

//   document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//   // Partial application
//   const addTax = (rate, value) => value + value * rate;
//   console.log(addTax(0.1, 200));

//   const addVAT = addTax.bind(null, 0.23);
//   // addVAT = value => value + value * 0.23;

//   console.log(addVAT(100));
//   console.log(addVAT(23));

//   const addTaxRate = function (rate) {
//     return function (value) {
//       return value + value * rate;
//     };
//   };
//   const addVAT2 = addTaxRate(0.23);
//   console.log(addVAT2(100));
//   console.log(addVAT2(23));
