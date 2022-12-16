"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
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
    get length() {
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
    at(index) {
        if (!this.head) {
            throw new Error(LinkedList.EMPTY_LIST);
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index)
                return node;
            counter++;
            node = node.next;
        }
        throw new Error(LinkedList.INDEX_OUT_OF_BOUNDS);
    }
    compare(leftIndex, rightIndex) {
        if (!this.head)
            throw new Error(LinkedList.EMPTY_LIST);
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        if (!this.head)
            throw new Error(LinkedList.EMPTY_LIST);
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
    }
    print() {
        if (!this.head)
            return;
        let node = this.head;
        let data = '';
        while (node) {
            data += `${node.data} `;
            node = node.next;
        }
        console.log(data);
    }
}
exports.LinkedList = LinkedList;
LinkedList.EMPTY_LIST = 'Linked list is empty';
LinkedList.INDEX_OUT_OF_BOUNDS = 'Index out of bounds';
