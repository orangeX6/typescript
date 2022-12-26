/*


# ⎛⎝(•‿•)⎠⎞
# SECTION 14 -  EXPRESS + TYPESCRIPT INTEGRATION
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
215. Typescript with JS Libraries
216. App Overview
217. Project Setup
218. Basic Routes with Express
219. Using an Express Router
220. Parsing Form Bodies
221. Why Doesn't Express Play Nicely with TS?
222. Issues with Type Definition Files
223. Dealing with Poor Type Defs
224. Wiring Up Sessions
225. Checking Login Status
226. Logging Out
227. Protecting Routes
228. A Closer Integration
229. The Refactoring Process
230. Prototypes Reminder
##################################################

# 215 Typescript with JS Libraries
-> When we want to use TS with js libs -> we can 
>> Use the lib normally, adding in basic type annotations where possible

>> Use a TS adapter library that has helpers for using your lib with TS 
_For example - express can be used with ts-express-decorators

>> Twist your library to work with TS classes

# 216 App Overview
# 217 Project Setup
# 218 Basic Routes with Express
# 219 Using an Express Router
# 220 Parsing Form Bodies
IMPORTANT ------------BLOCK BEGIN--------------------------------
# 221 Why Doesn't Express Play Nicely with TS?
# 222 Issues with Type Definition Files
IMPORTANT --------------BLOCK END--------------------------------
# 223 Dealing with Poor Type Defs
# 224 Wiring Up Sessions
# 225 Checking Login Status
# 226 Logging Out
# 227 Protecting Routes
# 228 A Closer Integration
# 229 The Refactoring Process
# 230 Prototypes Reminder



# ⎛⎝(•‿•)⎠⎞
# SECTION 15 -  DECORATORS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
231. Note about target environment in tsconfig
232. Decorators in Typescript
233. Details on Decorators
234. Property Descriptors
235. Wrapping Methods with Descriptors
236. Decorator Factories
237. Decorators Around Properties
238. More on Decorators
##################################################

# 232 Decorators in Typescript
_ DECORATORS 
-> Functions that can be used to modify/change/or do anything on different methods/properties in the class
>> Not the same as JS decorators
-> Used inside/on classes only
>> We cam use them to modify properties or methods or static methods or accessors or classes themselves as well
>> Understanding the order in which decorators are ran is the key to understanding them

# 233 Details on Decorators
>> The following notes are applicable to when we use a decorator on a property, method or an accessor
_ First argument is the prototype of the object
_ Second argument is the key of the property/method/accessor on the object
_ Third argument is the property descriptor
_ Decorators only gets executed one single time when we define a class
 the decorator just executes the function with the following args -  testDecorator(Boat.prototype, 'pilot');

# 234 Property Descriptors
_ The Property descriptor type is globally available to us in TypeScript
>> This is an object that has some configuration options around a property defined on an object.
-> Its not actually a part of TS, its a part of ES5 JavaScript

_Property Descriptor is essentially an object that is made to configure a property on another object

-> Property Descriptor for Methods 
_ writable 
>> whether or not this property can be changed
_ enumerable
>> whether or not this property get looped over by a 'for...in'
_ value
>> Current value
_ configurable
>> Property definition can be changed and property can be deleted

* EXAMPLE 
_ const car = {make:'honda', year: 2004}
>> undefined
_ Object.getOwnPropertyDescriptor(car, 'make')
>> {value: 'honda', writable: true, enumerable: true, configurable: true}
_ Object.defineProperty(car, 'make', {writable:false})
>> {make: 'honda', year: 2004}
_ car
>> {make: 'honda', year: 2004}
_ car.make = 'chevy'
>> 'chevy'
_ car
>> {make: 'honda', year: 2004}

* EXAMPLE CODE 
 const car = {make:'honda', year: 2004}
 Object.getOwnPropertyDescriptor(car, 'make')
 Object.defineProperty(car, 'make', {writable:false})
 car
 car.make = 'chevy'
 car

_ So this whole property descriptor object is going to be a key way in which we modify different properties inside our descriptors

# 235 Wrapping Methods with Descriptors
# 236 Decorator Factories
# 237 Decorators Around Properties
# 238 More on Decorators



# ⎛⎝(•‿•)⎠⎞
# SECTION 16 -  ADVANCED EXPRESS AND TS INTEGRATION
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
239. A Quick Disclaimer
240. Project Overview
241. Why is This Hard?
242. Solution Overview
243. Note about target environment in tsconfig
244. Basics of Metadata
245. Practical Metadata
246. Let's Refactor!
247. The 'Get' Decorator
248. The Controller Decorator
249. Proof of Concept
250. A Few Fixups
251. Defining a RouteBinder
252. Closed Method Sets with Enums
253. Metadata Keys
254. The 'Use' Decorator
255. Testing Use
256. Body Validators
257. Automated Validation
258. Testing Automated Validation
259. Fixing Routes
260. Using Property Descriptors for Type Checking
261. App Wrapup
##################################################

# 239 A Quick Disclaimer
# 240 Project Overview
# 241 Why is This Hard?
# 242 Solution Overview
_ METADATA 
-> Proposed feature to be added to JavaScript
>> Snippets of info that can be tied to a method, property, or class definition
-> Can be used for super custom stuff
>> TypeScript will (optionally) provide type information as metadata
-> Read and written using the reflect-metadata package 
_ npm i reflect-metadata

# 243 Note about target environment in tsconfig
# 244 Basics of Metadata
# 245 Practical Metadata
# 246 Let's Refactor!
# 247 The 'Get' Decorator
# 248 The Controller Decorator
_ When we apply decorator to the class itself, we pass the constructor function as parameter as opposed to usually when we apply a decorator to a method or a property, its going to be the prototype instead.
# 249 Proof of Concept
# 250 A Few Fixups
-> Defining an index.ts file in decorators and exporting all the decorators in there. So we can just write a single line to import all the decorators
-> Instead of creating a new router in multiple places creating a AppRouter file and creating a singleton router(one router for the entire app in that file)
>> The idea is that we want to only ever have one single router available inside our application.
_ So if we ever wanted to access that router, we are going to import app router and then use the getInstance method. If its the first time we are ever calling get instance, we are going to create a new router right away and assign it to instance otherwise we,ll just return the instance right away.

# 251 Defining a RouteBinder
# 252 Closed Method Sets with Enums
# 253 Metadata Keys
# 254 The 'Use' Decorator
# 255 Testing Use
# 256 Body Validators
# 257 Automated Validation
# 258 Testing Automated Validation
# 259 Fixing Routes
# 260 Using Property Descriptors for Type Checking
  @get('/')
  add(a: number, b: number): number {
    return a + b;
  }
  >> The above code will just add our req and response object and will just hang and won't send any response. to tackle this we use property descriptors
  _ The code will hang is itself bad but we wont get any error and so we need to tell our decorator that it can be only used on a function that takes in a request and a response 

# 261 App Wrapup



# ⎛⎝(•‿•)⎠⎞
# SECTION 16 -  ADVANCED EXPRESS AND TS INTEGRATION
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
_  ###############################################
262. React and Redux Overview
263. App Overview
264. Generating the App
265. Simple Components
266. Interfaces with Props
267. Handling Component State
268. Confusing Component State!
269. Functional Components
270. Redux Setup
271. Action Creators with Typescript
272. Action Types Enum
273. The Generic Dispatch Function
274. A Reducer with Enums
275. Validating Store Structure
276. Connecting a Component to Redux
277. Rendering a List
278. Adding in Delete Functionality
279. Breaking Out Action Creators
280. Expressing Actions as Type Union
281. Type Guards in Reducers
282. Wiring up deleteToDo Action
283. Again, Type Definition Files
284. Tracking Loading with Component State
285. App Wrapup
##################################################

# 262 React and Redux Overview
# 263 App Overview
# 264 Generating the App
# 265 Simple Components

# 266 Interfaces with Props
# 267 Handling Component State
_ This will work 
state = { counter: 0 };

>> This wont work
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  These are two very different statements and will have two very different impacts in the world of typescript, because if you check the index.ts file of App.Component you will notice that state is a Readonly empty object 
_ To make the above work add an interface of state type to React component
interface AppState {
  counter: number;
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

# 268 Confusing Component State!
# 269 Functional Components
interface AppProps {
  color?: string;
}

>> FUNCTIONAL COMPONENT
const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};

# 270 Redux Setup
# 271 Action Creators with Typescript
# 272 Action Types Enum
# 273 The Generic Dispatch Function
# 274 A Reducer with Enums
# 275 Validating Store Structure
# 276 Connecting a Component to Redux
# 277 Rendering a List
# 278 Adding in Delete Functionality
# 279 Breaking Out Action Creators
# 280 Expressing Actions as Type Union
# 281 Type Guards in Reducers
# 282 Wiring up deleteToDo Action
# 283 Again, Type Definition Files
# 284 Tracking Loading with Component State
# 285 App Wrapup


*/
