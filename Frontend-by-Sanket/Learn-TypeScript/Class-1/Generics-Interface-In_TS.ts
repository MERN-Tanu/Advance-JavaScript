interface customerInterface<T1, T2> {
  property: T1;
  moreProperty: T2;
}

const obj: customerInterface<string, number> = {
  property: "10",
  moreProperty: 20,
};

console.log(obj);
