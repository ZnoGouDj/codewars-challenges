class Queue {
  // HashTable method
  #storage = {}; //# -- private
  #last = 0;
  #first = 0;

  constructor() {}

  enqueue(item) {
    // todo: добавить элемент в конец очереди
    this.#storage[this.#last] = item;
    this.#last++;
  }

  dequeue() {
    // todo: удалить первый элемент из очереди
    if (this.size === 0) {
      return;
    }
    const value = this.#storage[this.#first];

    delete this.#storage[this.#first];
    this.#first++;

    return value;
  }

  get size() {
    // todo: возвращает размер списка
    return this.#last - this.#first;
  }
}

const table = new Queue();

// table.enqueue(1);
// table.enqueue(2);
// table.enqueue(42);

// table.dequeue();

// console.log(table.size);

class LinkedList {
  #length = 0;
  #head;
  #tail;

  addToTail(value) {
    const node = {
      value,
      next: null,
    };

    if (this.#length === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail = node;
    }

    this.#length++;
  }

  removeFromHead() {
    if (this.#length === 0) {
      return;
    }

    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#length--;

    return value;
  }

  size() {
    return this.#length;
  }
}

class Queue1 extends LinkedList {
  constructor() {
    super();

    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }

  get size() {
    return super.size();
  }
}

const queue1 = new Queue1();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log(queue1.size);
