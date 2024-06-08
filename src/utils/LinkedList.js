class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = { value, next: null };

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertAtHead(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
  }

  toArray() {
    const elements = [];
    let current = this.head;
    while (current !== null) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }

  update(index, value) {
    let current = this.head;
    let i = 0;
    while (current !== null) {
      if (i === index) {
        current.value = value;
        return;
      }
      current = current.next;
      i++;
    }
  }

  delete(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    let i = 0;
    while (current !== null) {
      if (i === index) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
      i++;
    }
  }
}

export default LinkedList;
