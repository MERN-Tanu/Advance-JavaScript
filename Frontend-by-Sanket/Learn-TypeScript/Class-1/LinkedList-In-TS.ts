class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class node<T> {
  data: T;
  next: node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: node<T> | null;

  constructor() {
    this.head = null;
  }

  addAtHead(x: T): void {
    if (this.head == null) {
      this.head = new node(x);
      return;
    }

    let newNode: node<T> = new node(x);
    newNode.next = this.head;
    this.head = newNode;
  }

  display(): void {
    let temp: node<T> | null = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let ll = new LinkedList<Person>();

ll.addAtHead(new Person("tanu"));
ll.addAtHead(new Person("tan"));
ll.addAtHead(new Person("ta"));
ll.addAtHead(new Person("tanus"));
ll.display();

/*
[LOG]: Person: {
  "name": "tanus"
} 
[LOG]: Person: {
  "name": "ta"
} 
[LOG]: Person: {
  "name": "tan"
} 
[LOG]: Person: {
  "name": "tanu"
} 

*/
