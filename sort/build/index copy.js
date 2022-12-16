"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is number[]
                // If collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1])
                        [this.collection[j], this.collection[j + 1]] = [
                            this.collection[j + 1],
                            this.collection[j],
                        ];
                }
                // Only going to work if collection is a string
                // If collection is a string, use this logic instead
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter = new Sorter([10, 245, 24, -69, 3, -5, 0, 999, 9]);
sorter.sort();
console.log(sorter.collection);
