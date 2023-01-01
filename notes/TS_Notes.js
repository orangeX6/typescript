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
  

}



*/
