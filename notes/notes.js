/*
# ⎛⎝(•‿•)⎠⎞
# TRICKS 
# 1
_ ctrl+p open command palette >fold level 2 
>> to wrap up functions

# 2


# ⎛⎝(•‿•)⎠⎞
# SECTION 1 -  GETTING STARTED WITH TYPESCRIPT
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
##################################################

#  typescriptlang.org/play

# Install the typescript compiler & ts-node 
# ts-node is a command line tool that allows us to compile and execute typescript with one command at our terminal
->> npm install -g typescript ts-node
  
->> tsc --help

ts-node helps you directly execute ts file. The conversion of ts to js file is done behind the scenes.
example - 
* without ts-node (Creates a js file which we need to execute)
-> tsc index.ts
-> node index.js

* with ts-node (It does not create a js file)
-> ts-node index.ts

# Interface - Interfaces in typescript are used to define structure of an object. 
>> example
->	interface Todo {
->	id: number;
->	title: string;
->  	completed: boolean;
->	}




# ⎛⎝(•‿•)⎠⎞
# SECTION 2 - WHAT IS A TYPE SYSTEM
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
##################################################

-> When learning typescript, there's really two distinct categories of knowledge that we need.
>>  to understand the syntax and features of the language.
>>  design patterns using TypeScript. 
# (How do we use interfaces to write some amount of reusable code)

# 13 Types
_ Type - Easy way to refer to the different properties + functions that a value has
* Value - anything we can assign to a variable - strings, numbers, booleans, functions, object, null, undefined, classes, arrays and so on. All of these things have types

-> Example---------------------------
>>          ├-> Its a string
>> "hello" -┤
>>          ├-> It has a value that has all the properties + methods that we assume that a string has

_ Some Properties + Methods a string has in JS
>> charAt(), concat(), includes(), length, prototype, etc
->-----------------------------------

# 14 More on types
->            Types
-> Primitive types    Object Types
>>    number            functions  
>>    boolean           arrays
>>    string            classes
>>    void              objects
>>    null
>>    undefined
>>    symbol

-> Why do we care about types at all? 
>> Types are used by the typescript compiler to analyze our code for errors
>> Types allow other engineers to understand what values are flowing around our codebase

# 15 Examples of Types



# ⎛⎝(•‿•)⎠⎞
# SECTION 3 - TYPE ANNOTATIONS IN ACTION
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
17. Type Annotations and Type Inference
18. Annotations with Variables
19. Object Literal Annotations
20. Annotations Around Functions
21. Understanding Inference
22. The 'Any' Type
23. Fixing the 'Any' Type
24. Delayed Initialization
25. When Inference Doesn't Work
##################################################

# 17 Type Annotations and Type Inference
* these two features apply slightly differently to variable declarations, functions and objects.

_ Type Annotations - A type annotation is some tiny bit of code that tell typescript what type of value a variable will refer to

_ Type Inference - A type inference tries to figure out what type of value a variable refers to

_ Type Annotations <-------------------------> Type Inference
>> we tell typescript the type           typescript guess the type

# 18 Annotations with Variables
# 19 Object Literal Annotations
# 20 Annotations Around Functions
* REFER TO annotations > variables.ts

# 21 Understanding Inference
>> If we are doing the declaration and initialization at the same time, type script will do type inference for us
* Example 
>> 1 Type inference
->> let apples = 5; // typescript will infer that apple takes a number
! apples = 'oranges' // this will give an error

>> 2 Assigning any type
->> let apples; // typescript will assign "any" type to the variable
->> apples = 5

_When to use type annotations vs Type inference 
>> TYPE ANNOTATIONS     
-> when we declare a variable on one line then initialize it later
-> when we want a variable to have a type that cant be inferred
-> When a function returns the 'any' type and we need to clarify the value
>> TYPE INFERENCE
-> ALWAYS, ALL THE TIME, WHEREVER WE CAN ( WHENEVER WE CAN, WE USE THIS )

# 22 The 'Any' Type
# 23 Fixing the 'Any' Type
-> Any is a type, just as 'string' or 'boolean' are
-> Means TS has no idea what this is - can't check for correct property references 
    >> (and generally thats a very bad thing to have inside our application)
! Avoid variables with 'any' at all costs

_ TO Fix this up, we can add a type annotation for object coordinates

-> EXAMPLE
// //_ 1) Function that returns the 'any' type
// // # 22 - The any type
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);
// //! coordinates.weghawklsgadlgahd; Typescript does not give error as coordinates is of any type
>> FIX 
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

# 24 Delayed Initialization
//_ 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) 
  if (words[i] === 'green')  foundWord = true;
  
# 25 When Inference Doesn't Work
let numberAboveZero: boolean | number = false;




# ⎛⎝(•‿•)⎠⎞
# SECTION 4 - ANNOTATIONS WITH FUNCTIONS AND OBJECTS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
26. More on Annotations Around Functions
27. Inference Around Functions
28. Annotations for Anonymous Functions
29. Void and Never
30. Destructuring with Annotations
31. Annotations Around Objects
##################################################

# 26 More on Annotations Around Functions
_Type annotations for functions 
-> Code we add to tell TypeScript what type of arguments a function will receive and what type of values it will return

_ Type inference for functions 
-> TypeScript tries to figure out what type of value a function will return. 
! Type inference only work around the return type of a function, it won't figure out what type of value the arguments are.

# 27 Inference Around Functions
# 28 Annotations for Anonymous Functions

# 29 Void and Never
-> VOID 
_ Technically a function that returns void can return null or undefined but effectively we use void to say there will be no return value from the function

-> NEVER
_ Anytime you throw an error the function technically does not return anything. So to indicate that we can use never that means we are never going to reach the end of the function.
>> We are never going to execute the function completely, at some point in time inside the function, we are going to throw an error and exit the function early without returning any value

# 30 Destructuring with Annotations
# 31 Annotations Around Objects



# ⎛⎝(•‿•)⎠⎞
# SECTION 5 - MASTERING TYPED ARRAYS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
32. Arrays in Typescript
33. Why Typed Arrays?
34. Multiple Types in Arrays
35. When to Use Typed Arrays
##################################################

# 32 Arrays in Typescript
-> Typed Arrays - Arrays where each element is some consistent type of value
>> One big difference with arrays in typescript is that generally we only stick elements with very consistent type into the array

# 33 Why Typed Arrays?
-> TS can do type inference when extracting values from an array
-> TS can prevent us from adding incompatible values to the array
-> Help with properties and methods of value
-> Flexible - arrays can still contain multiple different types

# 34 Multiple Types in Arrays
# 35 When to Use Typed Arrays
-> Anytime we need to represent a collection of records with some arbitrary sort order



# ⎛⎝(•‿•)⎠⎞
# SECTION 6 - TUPLES IN TYPESCRIPT
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
36. Tuples in Typescript
37. Tuples in Action
38. Why Tuples?
##################################################
# 36 Tuples in Typescript
_ Tuple -> Array like structure where each element represents some property of a record

-> Difference between arrays and tuples? 
>> The big difference between arrays and tuples is that in tuple we are going to have every element represent one specific property about some record.
_ An array tells us about bunch of different records or organizes a collection of different records, where as a tuple usually contains multiple different properties to describe one single thing
>> Usually inside of a tuple we will mix and match different types of data
>> When we work with a tuple, we have a fixed series of elements or a fixed order.

# 37 Tuples in Action
# 38 Why Tuples?



# ⎛⎝(•‿•)⎠⎞
# SECTION 7 - THE ALL-IMPORTANT INTERFACE
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
39. Interfaces
40. Long Type Annotations
41. Fixing Long Annotations with Interfaces
42. Syntax Around Interfaces
43. Functions in Interfaces
44. Code Reuse with Interfaces
45. General Plan with Interfaces
##################################################
# 39 Interfaces
_ Creates a new type and describes the property names and value types of an object


# 40 Long Type Annotations
# 41 Fixing Long Annotations with Interfaces
# 42 Syntax Around Interfaces
# 43 Functions in Interfaces
# 44 Code Reuse with Interfaces
# 45 General Plan with Interfaces
_ General Strategy for reusable code in TypeScript
-> Create functions that accept arguments that are typed with interfaces
-> Objects / Classes can decide to 'implement' a given interface to work with a function


# ⎛⎝(•‿•)⎠⎞
# SECTION 8 - BUILDING FUNCTIONALITY WITH CLASSES
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
46. Classes
47. Basic Inheritance
48. Instance Method Modifiers
49. Fields in Classes
50. Fields with Inheritance
51. Where to Use Classes
##################################################
# 46 Classes
_ Class - Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'(obj).

# 47 Basic Inheritance

# 48 Instance Method Modifiers
_ public 
-> This method can be called any where, any time

_ private
-> This method can only be called by other methods in this class

_ protected
-> This method can be called by other methods in this class, or by other methods in child classes 

# 49 Fields in Classes
-> The modifiers (public, private, protected) can be used not only on methods in a class, but on properties or fields as well

# 50 Fields with Inheritance
# 51 Where to Use Classes
Classes are used heavily in TS 



# ⎛⎝(•‿•)⎠⎞
# SECTION 9 - DESIGN PATTERNS WITH TYPESCRIPT
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
52. Updated Parcel Instructions
53. App Overview
54. Bundling with Parcel
55. Project Structure
56. IMPORTANT Info About Faker Installation
57. Generating Random Data
58. Type Definition Files
59. Using Type Definition Files
60. Export Statements inTypescript
61. Defining a Company
62. Note on Generating an API Key
63. Adding Google Maps Support
64. Required Update for New @types Library
65. Google Maps Integration
66. Exploring Type Definition Files
67. Hiding Functionality
68. Why Use Private Modifiers? Here's Why
# 69. Adding Markers
70. Duplicate Code
71. One Possible Solution
72. Restricting Access with Interfaces
73. Implicit Type Checks
74. Showing Popup Windows
75. Updating Interface Definitions
76. Optional Implements Clauses
77. App Wrapup
##################################################

# 58 Type Definition Files
_ Think of Type definition file as kind of an adapter between typescript code that we write and Javascript libraries that we work with
->> A type definition file is going to tell the TypeScript compiler all the different functions that are available inside this JavaScript library, what type of argument they take and what type of value those functions return.
>> So once again, you can think of these type definition files as like an adapter layer of sorts. 
-> Sometimes type definition files will be installed automatically when you install a JavaScript library. 
* So for example, when working with axios we don't have to do anything related to type definition files. That's because Axios by default includes a type definition file for us. 

_ If you ever try to make use of a module and you see the warning below -
! Could not find a declaration file for module '<PACKAGE_NAME>'
_ that means you need to install the type declaration file. Once we understand that we need to install that file, it's a really simple process.

>> All these type definition files are already publicly available for you. Not literally all of them, but the vast majority for popular libraries have already been created.
IMPORTANT To install that type definition file. We're going to reach into a project called Definitely Typed. That's the name of the project that includes all these pre created or pre generated type definition files in general to get any of these type definition files from definitely typed.
-> We're always going to install an NPM module that generally is going to be named something like @types/ and then the name of the library that we're trying to make use of.
_SYNTAX_ npm i @types/faker
-> So for example ->  npm install --save @types/faker

IMPORTANT You can use these type definition files not only for NPM modules but also for script tags added in directly to our HTML files as well

# 59 Using Type Definition Files
-> Traditionally type definition files are named with extensions d.ts
>> For EXAMPLE - index.d.ts

# 60 Export Statements inTypescript
-> In typescript world, its a little bit more community convention to not use default exports.
-> The reason for that is that then we don't have to worry about whether or not we have to include those curly braces

# 61 Defining a Company
# 62 Note on Generating an API Key
# 63 Adding Google Maps Support
IMPORTANT ADDING SECRET TO HTML FILE 
_ yarn add -D posthtml-expressions
If you’re using something that runs JS (like react) as mentioned you can just reference process.env in your code. However, I was able to get environment variables within my regular HTML files using PostHTML with the following steps:

Set some environment variables, e.g., I created .env.development in the root of my project as such:

HOME_URL=/index.html
Add the posthtml-expressions library:

yarn add -D posthtml-expressions
Add a posthtml config file—important that it’s a JS file and not just JSON—posthtml.config.js (the reason for using these as JS files is not really documented currently, but the ability to access process.env here is why I’m using it):

module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        HOME_URL: process.env.HOME_URL
      }
    }
  }
};
Update my HTML to use the posthtml-expressions syntax:

<a href="{{ HOME_URL || '/' }}">home</a>
In order to try it out in dev yarn start and to build it for production yarn build taking into account different environments, I have the following in my package.json:

{
  "scripts": {
    "start": "yarn parcel src/*.html",
    "build": "NODE_ENV=prod parcel build --public-url ./ src/index.html",
  }
}
And voila, you have environment variables reflected in your HTML.

Also, one gotcha: I’m not seeing changes to .env triggering a re-build. You’ll have to edit something to trigger a re-build or stop parcel, rm -r .cache, and then start parcel.

# 76 Optional Implements Clauses
_ you do not have to add implements clause right here.This is not required at all. The reason we would decide to add this implements clause to this class is so that if we failed to properly implement an interface, typescript can point us to the true source of error
-> export class User implements Mappable {}




# ⎛⎝(•‿•)⎠⎞
# SECTION 10 - MORE ON DESIGN PATTERNS 
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
78. App Overview
79. Configuring the TS Compiler
80. Concurrent Compilation and Execution
81. A Simple Sorting Algorithm
82. Sorter Scaffolding
83. Sorting Implementation
84. Two Huge Issues
85. Typescript is Really Smart
86. Type Guards
87. Why is This Bad?
88. Extracting Key Logic
89. Separating Swapping and Comparison
90. The Big Reveal
91. Interface Definition
92. Sorting Arbitrary Collections
93. Linked List Implementation
94. Completed Linked List Code
95. Just...One...More...Fix...
96. Integrating the Sort Method
97. Issues with Inheritance
98. Abstract Classes
99. Why Use Abstract Classes?
100. Solving All Issues with Abstract Classes
101. Interfaces vs Abstract Classes
_  ###############################################

# 79 Configuring the TS Compiler
-> tsc --init
>> creates a tsc config file
-> tsc -w
>> Watches the typescript files and converts ts to js whenever there is a change
-> npm i -g concurrently
>> Run multiple ts scripts concurrently

# 84 Two Huge Issues
# 85 TypeSCript is really smart
-> When we work with array of numbers we can use bracket notation to change the value of element on a specific array position
-> Strings kind of works like arrays but are not arrays 
>> They are immutable and we cannot change characters in the string
* eg - 
* const color = 'red'
* console.log(color[0]);
* console.log(color);
* color[0] = 'Y'
* console.log(color)
>> This means swapping logic wont work with string of characters

* "X" > "a"                           //returns false
* console.log("X".charCodeAt(0))      //88 
* console.log("a".charCodeAt(0))      //97
* "X">"a"                             // 88 > 97 // false

TypeSCript is really smart
-> This is why we get the error when we do the following 
* constructor(public collection: number[] | string) {}
! we get the error - "Index signature in type 'string | number[]' only permits reading"
_ this is because typescript knows that we can update values inside an array using the index notation '[]'
-> typescript knows we can do this  [this.collection[j], this.collection[j + 1]] = [this.collection[j + 1], this.collection[j], with an array. But typescript also knows strings do not support that. Hence we get the error. 


# 86 Type Guards
_   Once we run a type guard we are essentially going to clarify the type of value we are working with
        if (this.collection instanceof Array) {
          // number array logic
        }
        if (typeof this.collection === 'string') {
          // string logic
        }

_ Narrow down type of a value to a primitive value 
>> values -> number, string, boolean, symbol
-> SYNTAX EXAMPLE -> typeof this.collection === 'number'        

_ Narrow down every other type of value (Every other value that is created with a constructor function)
-> SYNTAX EXAMPLE -> this.collection instance of Array
                  -> this.person instance of Person

# 87. Why is This Bad?
_>> The reason this is bad is because if we ever want to add in some additional things to be sorted here we would have to go back over to our class sorter and add them into the collection union and we would have to add the extra type guard and add logic into it where in all the logics are doing the exact same thing

# 98 Abstract Classes
_ Abstract Classes - 
-> Can't be used to create an object directly
>> Only used as a parent class
-> Can contain real implementation for some methods
>> The implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
-> Can make child classes promise to implement some other method

# 99 Why Use Abstract Classes?


# 100 Solving All Issues with Abstract Classes
If a child class doesn't define a constructor, we don't have to call super.
Sorter class' constructor will be automatically called for us instead

# 101 Interfaces vs Abstract Classes
_ Inheritance / Abstract Classes
->> Sets up a contract between different classes
>>  Use when we are trying to build up a definition of an object
->> Strongly couples classes together
* EXAMPLE - 
>> in the example of the map application with that Google map and a user and a company, a user and a company were very different from a map. 
>>Those were very dissimilar objects. And so any time we are working with a very dissimilar objects or objects with very different purposes, that is a very good time to reach for an interface.

_ ------------------ VS -------------
_ Interfaces 
-> Sets up a contract between different classes
>> Use when we have very different objects that we want to work together
-> Promotes loose coupling
* EXAMPLE - 
>> in the SORT application, we had an example where we were trying to really build up a definition of an object using some very similar classes. 
>> So we were defining like a character collection and a number collection, and they were trying to work with a sorter.
>> A sorter class probably has a lot to do with a collection of data, like a collection of numbers or strings or whatever. 
>> And so because a sorter was very closely related to the numbers collection or very closely related to the characters collection, well, that was probably a better scenario to start thinking about inheritance and abstract classes.


# ⎛⎝(•‿•)⎠⎞
# SECTION 11 - Reusable Code ( INHERITANCE AND COMPOSITION )
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
102. Project Overview
103. Project Setup
104. CSV Data
105. Type Definition Files - Again!
106. Reading CSV Files
107. Running an Analysis
108. Losing Dataset Context
109. Using Enums
110. When to Use Enums
111. Extracting CSV Reading
112. Data Types
113. Converting Date Strings to Dates
114. Converting Row Values
115. Type Assertions
116. Describing a Row with a Tuple
117. Not Done with FileReader Yet!
118. Understanding Refactor #1
119. Creating Abstract Classes
120. Variable Types with Generics
121. Applying a Type to a Generic Class
122. Alternate Refactor
123. Interface-Based Approach
124. Extracting Match References - Again!
125. Transforming Data
126. Updating Reader References
127. Inheritance vs Composition
128. More on Inheritance vs Composition
129. A Huge Misconception Around Composition
130. Goal Moving Forward
131. A Composition-Based Approach
132. Implementing an Analyzer Class
133. Building the Reporter
134. Putting It All Together
135. Generating HTML Reports
136. One Last Thing!
137. Oops, My Bad
138. App Wrapup
_  ###############################################

# 105 Type Definition Files - Again!
-> npm i @types/node

# 106 Reading CSV Files
# 107 Running an Analysis
# 108 Losing Dataset Context
-> Issue with current approach (Watch Running an analysis)
* Magic String Comparisons
* Source of data is hardcoded
* Data array is all strings, even though it might have numbers in it
* Variable named after a specific team
* Analysis type is fixed
* No ability to output the report in different formats

# 109 Using Enums

* EXAMPLE
>> enum MatchResult  {
>>   HomeWin = 'H',
>>   AwayWin = 'A',
>>   Draw = 'D',
>> };

# 110 When to Use Enums
_ Enums
->> Follow near identical syntax rules as normal objects
->> Creates an Object with the same keys and values when converted from TS to JS
->> Primary goal is to signal to other engineers that these are all closely related values
->> Use whenever we have a small fixed set of values that are all closely related and known at compile time

_ It is possible to define an Enum without any values inside of it
* EXAMPLE
>> enum MatchResult  {
>>   HomeWin,
>>   AwayWin,
>>   Draw,
>> };


# 120 Variable Types with Generics
-> Generics  
>> Like function arguments, but for types in class/function definitions
>> Allows us to define the type of a property/argument/return value at a future point
>> Used heavily when writing reusable code
* EXAMPLE
_We can call this <TypeOfData> anything, but by convention we use <T>
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}
const holdNumber = new HoldAnything<number>()
holdNumber.data = 123;

const holdString = new HoldAnything<string>()
holdString.data = 'SomeString'

# 127 Inheritance vs Composition
_ Inheritance 
-> Inheritance is the case where we had the abstract class called the CSVfileReader and then we had a child class based upon it called the MatchReader.
-> So this was a inheritance scenario because we wanted to have a parent class that had some core functionality around a CSV File Reader  
-> We then extended that class and created a child class out of it and we kind of customized some of the behavior
-> We customized behavior by implementing the mapRow
>> Anytime we are inheriting from a parent class, we refer to that as an inheritance

_ Composition 
-> Composition was characterized by the fact that we had a class called MatchReader and the MatchReader had a reference to some other object.  
-> We said that the reader property had to be any object that met the data reader interface.
-> Then anytime we called the load method, rather than relying upon the match reader to 100% source our data we instead kind of delegated, the actual action of loading up some data to the outside data reader
-> And we said the benefit to this approach was that we could easily swap in different styles of readers to customize how the match reader behaved.

_ Inheritance vs composition
>> think of it as a kind of mnemonic you can use to decide which style you are using at any given time is either a 'is a' relationship or 'has a' relation ship
-> Inheritance - Characterized by an 'is a' relationship between two classes
-> Composition - Characterized by a 'has a' relationship between two classes


# 128 More on Inheritance vs Composition
# 129 A Huge Misconception Around Composition
_ Favor object composition over class inheritance
IMPORTANT ->  WHEN IN DOUBT, JUST WATCH THIS VIDEO 


# 136 One Last Thing!
-> We can use static methods to generate an instance of a class to reduce the clutter in index.ts

# 137 Oops, My Bad
# 138 App Wrapup


# ⎛⎝(•‿•)⎠⎞
# SECTION 12 - Advanced Generics
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
139. More on Generics
140. Type Inference with Generics
141. Function Generics
142. Generic Constraints
_  ###############################################

# 139 More on Generics


# 140 Type Inference with Generics
# 141 Function Generics
# 142 Generic Constraints



*/
