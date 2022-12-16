import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  static EMPTY_LIST = 'Linked list is empty';
  static INDEX_OUT_OF_BOUNDS = 'Index out of bounds';

  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error(LinkedList.EMPTY_LIST);
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }

    throw new Error(LinkedList.INDEX_OUT_OF_BOUNDS);
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error(LinkedList.EMPTY_LIST);

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) throw new Error(LinkedList.EMPTY_LIST);
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
  }

  print(): void {
    if (!this.head) return;
    let node: Node | null = this.head;
    let data: string = '';
    while (node) {
      data += `${node.data} `;
      node = node.next;
    }
    console.log(data);
  }
}
