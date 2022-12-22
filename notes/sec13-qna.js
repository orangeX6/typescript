/*
-> QNA 155 
_ CORS error on DOCKER
>>If theres a CORS issue when running the app inside a docker container, the solution (for me at least) was to switch the json-server host to 0.0.0.0 using the -H flag when starting up:
>>
->>json-server -w db.json -H 0.0.0.0
>>
>>This will show a Resources link of  http://0.0.0.0:3000/users  but the server is still accessed in the usual way inside your TypeScript file:
>>
>>axios.post('http://localhost:3000/users', { name: 'Alex', age: 30 });
>>
>>To access the data in the browser the port needs to be exposed when running the container:
>>
->>docker run -p 3000:3000 [options]

>>Which will allow you to reach it at http://localhost:3000/users.

>>
>>(credit goes to this answer on GitHub https://github.com/typicode/json-server/issues/811#issuecomment-400329813)


*********************************************************
*********************************************************
*********************************************************

-> 168 QNA
>>an issue on this.data[propName]
->The typescript says there is an error for the line this.data[propName] that we returned inside the get function.
 
>>Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'IUserProps'.
>>  No index signature with a parameter of type 'string' was found on type 'IUserProps'.ts(7053)
From Stack Overflow: https://stackoverflow.com/questions/68906056/implicitly-has-an-any-type-because-expression-of-type-in-typescript

FROM GITHUB MICROSOFT TS ISSUES 
_ https://github.com/microsoft/TypeScript/issues/48886

>> Your error occurs because you can't use any string as the key, only a subset (name and age). Set keyof UserProps as the type for propName:

_ interface UserProps {
_   name: string
_   age: number
_ }
_  
_ export class User {
_   constructor(private data: UserProps) {}
_  
_   get<T extends keyof UserProps>(propName: T): UserProps[T] {
_     return this.data[propName]
_   }
_ }

*********************************************************
*********************************************************
*********************************************************
->QUESTION 
-> I have a similar issue but with the 'set' method, leading to the below message due to this.data:

>> No overload matches this call.
>>   Overload 1 of 4, '(target: {}, source: T): {} & T', gave the following error.
>>     Argument of type 'T' is not assignable to parameter of type '{}'.
>>   Overload 2 of 4, '(target: object, ...sources: any[]): any', gave the following error.
>>     Argument of type 'T' is not assignable to parameter of type 'object'.ts(2769)
>> Attributes.ts(1, 25): This type parameter might need an `extends {}` constraint.
>> Attributes.ts(1, 25): This type parameter might need an `extends object` constraint.
>> both suggestions leave the error in place.

14 days ago
* SOLUTION 1
->  a not great solution that I used was to simply use the 'as' keyword after 'this.data' and set the type to object.
_   set(update: T): void {     Object.assign(this.data as Object, update);   }

* SOLUTION 2
https://stackoverflow.com/questions/42421501/error-ts2345-argument-of-type-t-is-not-assignable-to-parameter-of-type-objec
-> Credit to stack overflow error TS2345: Argument of type 'T' is not assignable to parameter of type 'object'
>> Change signature of the function, so that generic type T extends type object, introduced in Typescript 2.2. Use this syntax - <T extends object>:

_ function create<T extends object>(prototype: T, pojo:     Object): T {
_     ...
_     return Object.create(prototype, descriptors) as T;
_ }

*********************************************************
*********************************************************
******************************************************************************************************************
*********************************************************
******************************************************************************************************************
*********************************************************
*********************************************************

!176 QNA 
-> CONTEXT ISSUE USING BIND AND WHY TO AVOID IT IN TS
-> BUT AVOIDING MIGHT NOT ACTUALLY BE THE RIGHT THING AS ARROW FUNCTION WILL CREATE AN INSTANCE FOR EVERY OBJECT CALL -
>> HERES SOME MORE INFO
-> 1
_ The performance issue with bind function appears if your class will have lots of instances, at that time bind will cause performance issue and this is known issue with bind.
_In other side, arrow functions have their own performance issue as well which is each instance created will have the same function created with it (inside the function constructor) and not via the prototype chain and this is the bad thing about arrow functions.
_there's always a tradeoff in web dev, but for readability we prefer arrow functions but pay attention to 'this' keyword here lol

-> 2
_ https://javascriptweblog.wordpress.com/2015/11/02/of-classes-and-arrow-functions-a-cautionary-tale/

-> 3
_https://www.charpeni.com/blog/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think

"A context issue" using bind() instead of arrow functions
4 upvotes
Thomas · Lecture 176 · 2 years ago
I'm referring to the "a context issue" video.

Investigating the "this" thing a little further, I found out, that the following code works, too:

class Printer {
    readonly message = "Hallo";
    print() {
        console.log(this.message);
    }
}
 
class Derived {
 
    readonly printer = new Printer();
 
    get print() {
        return this.printer.print.bind(this.printer);
    }
}
 
const i = new Derived();
i.print();
Honestly, I still think it's a little bit ugly but I like it more because the derived class which forwards the method call is in charge to "fix" the context. In your suggested example, the superclass must take action to allow derived classed to use method call forwarding which is totally not the superclass' business.



Are there any downsides using bind()? Is it actually the same or are there any differences?

2 replies

Stephen — Instructor
12 upvotes
2 years ago
I'd recommend avoiding 'bind' with Typescript.  It's really hard for TS to understand what bind is doing.  Better to explain this with an example than words:

class Printer {
  readonly message = "Hallo";
  print() {
    console.log(this.message);
  }
}
 
class Derived {
 
  readonly printer = new Printer();
 
  get print() {
    return this.printer.print.bind(undefined);
  }
}
 
const i = new Derived();
i.print();
Notice that I made two changes.  The 'print' method in 'Printer' refers to 'this'.  Also, I updated the 'bind' to provide a context of 'undefined'.

Now when you run i.print() , you get a version of the printer.print method where this === undefined !  That means we are trying to essentially run console.log(undefined.message) , which results in an error.

Naturally, you would probably not put 'undefined' in for the bind context, but the point is that TS cannot really figure out what is going on with that context value.  So if you ever put in an incorrect value in there, such as a reference to some other object, stuff is going to break but TS won't be able to help you out.

AN
Aaron
0 upvotes
10 months ago
Isn't that the same for javascript? If you put in an incorrect context value, stuff will break?


_ 194 

"strictNullChecks": false
5 upvotes
Alessandro · Lecture 194 · 2 years ago
If you enable "strictNullChecks": true in your TS config you are going to get the following error:


Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element'. Type 'null' is not assignable to type 'Element'.

This is because getElementById actually returns HTMLElement | null

What's the best practice here?

3 replies
AC
Alessandro
0 upvotes
2 years ago
It is explained in module 196 (Y)

IP
Ivan
1 upvote
3 months ago
Just addnull mark in UserForm class

constructor(public parent: Element | null) {}

then in render method check if parent exist:

     if (this.parent)
      this.parent.append(templateElement.content);

Edwin Alexander Cárdenas
1 upvote
3 months ago
Hi Ivan (I'm assuming that Alessandro have solved this issue), you can use !  to tell TS that you're sure that the element is not null, like this const userForm = new UserForm(document.getElementById('root')!); . Hope this helps!
*/
