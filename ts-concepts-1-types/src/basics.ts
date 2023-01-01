//_ STRING, NUMBER, BOOLEAN

function adding(n1: number, n2: number, showResult: boolean) {
  if (showResult) return n1 + n2;
  else console.log(n1 + n2);
}

const n1 = 56;
const n2 = 2.6;
let printResult = false;

const result = adding(n1, n2, printResult);
console.log(result);
