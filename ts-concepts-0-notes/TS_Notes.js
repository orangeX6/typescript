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


*/
