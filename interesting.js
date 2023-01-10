class People {
  list = [];
  constructor() {}
  pushy(li) {
    this.list.push(li);
  }
  callP() {
    console.log(this);
    this.list.at(0)();
  }
}

class cc {
  constructor() {
    const p = new People();

    p.pushy(() => console.log(this));
    p.callP();
  }
}
const c = new cc();
console.log(c);
