class Stack<T, S = void> {
  private array: T[];

  constructor() {
    this.array = [];
  }

  push(x: T): void {
    this.array.push(x);
  }

  pop(): void {
    this.array.pop();
  }

  top(): T {
    return this.array[this.array.length - 1];
  }

  display(): void {
    console.log(this.array); // ['abc','def','ghi']
  }
}

const st = new Stack<string>();
st.push("abc");
st.push("def");
st.push("ghi");
st.display();
