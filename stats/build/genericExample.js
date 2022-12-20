"use strict";
class HoldAnything {
    add(a) {
        return a;
    }
}
const holdNumber = new HoldAnything();
holdNumber.data = 123;
holdNumber.add(6);
const holdString = new HoldAnything();
holdString.data = 'String of some sort';
