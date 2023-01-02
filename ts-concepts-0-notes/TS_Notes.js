/*
-> Core Types 
_ number - 1,1.53 All numbers no differentiation between integers or floats. All numbers are float by default
_ strings
_ boolean _ true or false

-> Tuples 
const person: {
  name: string;
  role: [number, string];
} = {
  name: "Orange",
  role: [2, "author"],
};

 person.role[1] = 10; //! ERROR
 person.role = [1, "admin", "user"]; // ! ERROR
 person.role.push("admin"); // _ push works on tuples. So we need to be careful about this
person.role.unshift("str"); // _ unshift works on tuples


_ Literal types 
-> Literal types are types where you don't just say that a certain variable or parameter should hold a number or a string, but where you are very clear about the exact value it should hold

_ Difference between void and undefined types on a function
_ VOID
-> Void, in return void, return statement may or may not be present
* EXAMPLE
>>  function printAdditionResult(num: number): void {
>>    console.log('Result ' + num);
>>  }
_ OR
>>  function printAdditionResult(num: number): void {
>>    console.log('Result ' + num);
>>    return;
>>  }

_UNDEFINED
! RARELY, ALMOST NEVER USED
-> Undefined expects the function to return nothing. Return statement must be present 
* EXAMPLE 
>>  function printAdditionResult(num: number): undefined {
>>    console.log('Result ' + num);
>>    return;
>>  }

_NEVER TYPE
>>  function generateError(message: string, code: number): never {
>>    throw { message, errorCode: code };
>>  }
>>  const resultError = generateError('An error occurred', 500);
>> console.log(resultError); 
_ Won't show anything on console as it never returns anything, not even undefined. it will always crash. TS assumes its void but its also never and you can assign it as such




# ⎛⎝(•‿•)⎠⎞
# SECTION 3 - THE TYPESCRIPT COMPILER(AND ITS CONFIGURATION)
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################

# INCLUDING AND EXCLUDING FILES
_ EXCLUDE
# to exclude files from compilation , you can add second property to ts-config object i.e. EXCLUDE
* EXAMPLE
{
  "compilerOptions":{

  }, 
  "exclude":{

  },
}

  _ PROPERTIES TSCONFIG CAN TAKE 
  ->> buildOptions
  ->> compilerOptions
  ->> compileOnSave
  ->> exclude
  ->> extends
  ->> files 
  ->> include
  ->> references
  ->> typeAcquisitions
  ->> ts-node
  ->> watchOptions
  

->> EXCLUDE 
_ Tell ts to exclude certain files and folders in transpilation
_ Node modules is automatically excluded as default. should add this in case we are specifying the exclude option

->> INCLUDE 
_ Tell ts to include certain files and folders in transpilation. Everything else is excluded

->> Files
_ Just like include but only works for files 



->> compilerOptions
_ lib 
-> By Default, specify a set of bundled library declaration files that describe the target runtime environment. es2016 in current projects scope
>> Default setup for ES6 is - 
"lib": [
      "DOM",
      "ES6",
      "DOM.Iterable",
      "ScriptHost"
    ] 

_ Check JS
>>"checkJs": true,      //Enable error reporting in type-checked JavaScript files. 

_ SourceMap
>>"sourceMap": true,        // Create source map files for emitted JavaScript files.
-> Generates a .js.map file which acts as a bridge which is understood by the modern browsers to connect the js files to the input files. 
-> With this in our sources tab on browser we can have ts files along with js files, and we can also apply a debugger directly on TS file
_ TO USE VS CODE FOR DEBUGGING ENABLE SOURCEMAP IN TSCONFIG AND THEN WE CAN USE VSCODE DEBUGGER DIRECTLY  


_ No Emit On Error - default false
-> Will not generate a js file if there are errors. If any file has an error no file is generated
>>"noEmitOnError": true // Disable emitting files if any type checking errors are reported.,


_#################################################
->##############################################
>>###############################################
*###############################################
# > CLASSES AND INTERFACE  

# CLASSES
_PRIVATE CONSTRUCTORS 
_ There is a pattern in object oriented programming called the singleton pattern.
-> Singleton pattern is about ensuring that you only have exactly one instance of a certain class. 
>> This can be useful in scenarios where in you somehow cant use static methods or properties, but at the same time you want to ensure that you cant create multiple objects based on a class, but you only have exactly one object based on a class.
_ EXAMPLE 

class AccountingDepartment extends Department {
  private _lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this._lastReport = reports[0];
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
  this.instance = new AccountingDepartment('d2', []);
  return this.instance;
  }
}
const accounting = AccountingDepartment.getInstance();

>>  we cannot call new on the constructor now because the constructor is private


#INTERFACE 
_ We can implement multiple interfaces separated by a comma 
-> We can also add a readonly modifier on interface.
_ Unlike classes, you can inherit from multiple interfaces 
>> EXAMPLE
>> interface Greetable extends Named, AnotherInterface{}

_ You can add optional params to both classes and interfaces


######################
# ADVANCED TYPES 
_ Intersection types
_ Type Guards
_ Discriminated Unions
_ Type Casting
_ Function Overloads


_ Discriminated Unions
-> Its a pattern that we can use when working with union types that makes implementing type guard easier

_ Index Properties
>> A feature that allows us to create objects which are more flexible regarding the properties they hold


############################################################
##########################  GENERICS #######################
############################################################
_ A generic type is a type which is kind of connected with some other type and is really flexible regarding which exact type that other type is
>> GENERIC TYPES BUILT INTO JS 
-> Array 
-> Promise











############################################################
##########################  MIXINS #######################
############################################################
TypeScript (and JavaScript) classes support strict single inheritance. So you cannot do:
class User extends Tagged, Timestamped { // ERROR : no multiple inheritance
}
Another way of building up classes from reusable components is to build them by combining simpler partial classes called mixins.
The idea is simple, instead of a class A extending class B to get its functionality, function B takes class A and returns a new class with this added functionality. Function B is a mixin.
[A mixin is] a function that
takes a constructor,
creates a class that extends that constructor with new functionality
returns the new class
A complete example
// Needed for all mixins
type Constructor<T = {}> = new (...args: any[]) => T;

////////////////////
// Example mixins
////////////////////

// A mixin that adds a property
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// a mixin that adds a property and methods
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false;

    activate() {
      this.isActivated = true;
    }

    deactivate() {
      this.isActivated = false;
    }
  };
}

////////////////////
// Usage to compose classes
////////////////////

// Simple class
class User {
  name = '';
}

// User that is Timestamped
const TimestampedUser = Timestamped(User);

// User that is Timestamped and Activatable
const TimestampedActivatableUser = Timestamped(Activatable(User));

////////////////////
// Using the composed classes
////////////////////

const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);

const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);


_ type Constructor<T = {}> = new (...args: any[]) => T;
>> an explanation of the code you've provided:
-> This code defines a type called Constructor which represents a constructor function for a type T. The T type is defined as an empty object by default.
-> The type Constructor is defined as a new function that takes in a variable number of arguments of any type (...args: any[]) and returns an object of type T (=> T).
*/
