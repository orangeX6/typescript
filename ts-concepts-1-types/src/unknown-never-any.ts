// _ UNKNOWN TYPE
let userInput: unknown;
let userName: string = '';

userInput = 5;
userInput = 'Max';
// userName = userInput; //!ERROR
typeof userInput === 'string' && (userName = userInput);

console.log(userName);

//_ NEVER TYPE
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

const resultError = generateError('An error occurred', 500);
console.log(resultError); // Won't show anything on console as it never returns anything, not even undefined. it will always crash. TS assumes its void but its also never and you can assign it as such
