class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (value === '' || value == null) { // Check for empty or null values
      return;
    }

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  toArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }
}

export default LinkedList;
