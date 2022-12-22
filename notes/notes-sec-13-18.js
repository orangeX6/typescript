/*

# ⎛⎝(•‿•)⎠⎞
# SECTION 13 - Let's Build a Web Framework
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
143. App Overview
144. Parcel Setup
145. Framework Structure
146. Designing the User
147. Retrieving User Properties
148. Optional Interface Properties
149. An Eventing System
150. Listener Support
151. Storing Event Listeners
152. Dynamic Array Creation
153. Triggering Event Callbacks
154. Adding JSON Server
155. Understanding REST Conventions
156. Adding Fetch Functionality
157. Successfully Fetching Model Data
158. Saving User Data
159. Refactoring with Composition
160. Re-Integrating Eventing
161. Composition with Nested Objects
162. A More Complicated Extraction
163. Options for Adapting Sync
164. Refactoring Sync
165. Generic Constraints Around Sync
166. Connecting Sync Back to User
167. Optional Properties
168. Extracting an Attributes Class
169. The Get Method's Shortcoming
170. Two Important Rules
171. An Advanced Generic Constraint
172. Re-Integrating Attributes
173. Composition is Delegation
174. Reminder on Accessors
175. Passthrough Methods
176. A Context Issue
177. Setting Data While Triggering
178. Fetching User Data
179. Saving Data
180. Composition vs Inheritance...Again!
181. Extracting a Model Class
182. Extending the User
183. Final User Refactor
184. Model Wrapup
185. Shortened Passthrough Methods
186. Users Collection
187. Implementing a Users Collection
188. Parsing User JSON
189. Generic User Collection
190. A Class Method for Collections
191. View Classes
192. Building the UserForm
193. The UserForm's Render Method
194. Rendering HTML
195. Defining an Events Map
196. Binding Event Handlers
197. Adding Model Properties
198. Binding Events on Class Name
199. Adding Methods to the User
200. Re-Rendering on Model Change
201. Reading Input Text
202. Strict Null Checks
203. Reusable View Logic
204. Extracting a View Class
205. Extending with Generic Constraints
206. Saving Data From a View
207. UserEdit and UserShow
208. Nesting with Regions
209. Mapping Regions
210. Testing Region Mapping
211. View Nesting
212. Collection Views
213. CollectionView Implementation
214. App Wrapup
_  ###############################################

important 
_ When we create a class, we are technically creating two things, 
-> on one hand we are creating a class that we can create an instance of
_ on the other hand we are technically also creating a type or an interface 


_  ###############################################
_  ###############################################
#145 Framework Structure
_ Model Class -
-> Handle data, used to represent Users, Blog, Posts, Images, etc.
_ View Classes 
-> Handle HTML and events caused by the user (like clicks)

_ Extraction approach 
>> Build class User as a 'mega' class with tons of methods
>> Refactor user to use composition
>> Refactor user to be a reusable class that can represent any piece of data, not just a User     

#146 Designing the User
#147 Retrieving User Properties
#148 Optional Interface Properties
_ We can mark properties as optional in interface by using the ? operator
* EXAMPLE
->  interface UserProps {
->    name?: string;
->    age?: number;
->  }

#149 An Eventing System
#150 Listener Support
#151 Storing Event Listeners
#152 Dynamic Array Creation
>> type Callback = () => {};
-> The above will be interpreted as the type will be function that returns an object
>> To write that type returns nothing we do it like below- 
-> type Callback = () => void;

#153 Triggering Event Callbacks
#154 Adding JSON Server
>> To run this project we have to run two processes -
>> parcel index.html
>> json-server -w db.json

#155 Understanding REST Conventions
>> QNA 155
If anyone has the CORS issue when running the app inside a docker container, the solution (for me at least) was to switch the json-server host to 0.0.0.0 using the -H flag when starting up:

json-server -w db.json -H 0.0.0.0

This will show a Resources link of  http://0.0.0.0:3000/users  but the server is still accessed in the usual way inside your TypeScript file:

axios.post('http://localhost:3000/users', { name: 'Alex', age: 30 });

To access the data in the browser the port needs to be exposed when running the container:

docker run -p 3000:3000 [options]

Which will allow you to reach it at http://localhost:3000/users.



(credit goes to this answer on GitHub https://github.com/typicode/json-server/issues/811#issuecomment-400329813)

#156 Adding Fetch Functionality
#157 Successfully Fetching Model Data
#158 Saving User Data
#159 Refactoring with Composition
#160 Re-Integrating Eventing
#161 Composition with Nested Objects
#162 A More Complicated Extraction
#163 Options for Adapting Sync
>> Serialize -> Convert data from an object into some savable format(JSON)
>> Deserialize -> Put data on an object using some previously saved data(JSON)
#164 Refactoring Sync
IMPORTANT -----------------------------------------------
IMPORTANT -----------------------------------------------
IMPORTANT -----------------------------------------------
IMPORTANT -----------------------------------------------
IMPORTANT - JUST WATCH IT AGAIN 165-172
#165 Generic Constraints Around Sync
#166 Connecting Sync Back to User
#167 Optional Properties
#168 Extracting an Attributes Class
#169 The Get Method's Shortcoming
#170 Two Important Rules
_ 1 - In TypeScript, strings can be types
* EXAMPLE - 
>> type BestName = 'orange';
>> const printName = (name: BestName): void => {}
* we can only call printName only with the value 'orange'
_ 2 - In JS(and therefore TS), all object keys are strings
-> That means on an object, or the keys of an object can actually be a type as well
>> In typescript the keys of an object can be a type as well
IMPORTANT (PROBABLY THE MOST IMPORTANT VIDEO)
#171 An Advanced Generic Constraint
IMPORTANT (PROBABLY THE MOST IMPORTANT VIDEO)
* EXAMPLE (WATCH VIDEO FOR THIS)
>> const attrs = new Attributes<UserProps>({
>>   id: 5,
>>   age: 20,
>>   name: 'asgsdg',
>> });
>> 
>> const name = attrs.get('name');
>> const age = attrs.get('age');
>> const id = attrs.get('id');

#172 Re-Integrating Attributes
IMPORTANT - JUST WATCH IT AGAIN 166-172
IMPORTANT -----------------------------------------------
IMPORTANT -----------------------------------------------
IMPORTANT -----------------------------------------------

#173 Composition is Delegation
#174 Reminder on Accessors
>> EXAMPLE 
class Person {
  constructor (public firstName: string, public lastName: string){}

  fullName():string {
    return `${this.firstName} ${this.lastName}`
  }

  // getter accessor 
  get fullName():string {
    return `${this.firstName} ${this.lastName}`
  }
}
const person = new Person('S','PN');
console.log(person.fullName)

#175 Passthrough Methods
// NOT IDEAL 
  on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback)
  }

// USING GETTER 
get on() {
    return this.events.on;
  }

#176 A Context Issue
-> 176 Context issue Approaches 
>> 1 Bind while calling
_return this.attributes.get.bind(this.attributes);

>> 2 Arrow function
_   get = <K extends keyof T>(key: K): T[K] => {
_    console.log(this);
_    return this.data[key];
_  };

>> Bind in constructor 
_ export class Eventing {
_   constructor() {
_     this.on = this.on.bind(this);
_     this.trigger = this.trigger.bind(this);
_   }
_  
_   events: { [key: string]: Callback[] } = {};
_  
_   on(eventName: string, callback: Callback): void {
_     const handlers = this.events[eventName] || [];
_     handlers.push(callback);
_     this.events[eventName] = handlers;
_   }
_  
_   trigger(eventName: string): void {
_     const handlers = this.events[eventName];
_     if (!handlers || handlers.length === 0) {
_       return;
_     }
_     handlers.forEach(callback => {
_       callback();
_     });
_   }
_ }

>> Since in the current project scale we wont be creating much instances we ll use Arrow function. 
>> Check the QNA js file or bookmarks for further understanding and taking decision on performance issues and approach to take. 


  // Below will work without arrow functions but that is because we are storing our events on events property inside eventing and inside user.ts we are referencing events and using that for eventing
 on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

#177 Setting Data While Triggering
#178 Fetching User Data
#179 Saving Data
#180 Composition vs Inheritance...Again!
#181 Extracting a Model Class
#182 Extending the User
#183 Final User Refactor
#184 Model Wrapup
#185 Shortened Passthrough Methods
// 
  // get on() {
  //   return this.events.on;
  // }

  // get trigger() {
  //   return this.events.trigger;
  // }

  // get get() {
  //   return this.attributes.get;
  // }
Using below syntax instead of above
on = this.events.on
trigger = this.events.trigger
get = this.attributes.get

#186 Users Collection
#187 Implementing a Users Collection
#188 Parsing User JSON
#189 Generic User Collection
#190 A Class Method for Collections
#191 View Classes
#192 Building the UserForm
import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Nami', age: 25 });
// Putting ! to let ts know that this element will always be present and never be null
const userForm = new UserForm(document.getElementById('root')!, user);
userForm.render();
//Alternatively
// const root = document.querySelector('root');
// if (root) {
//   const userForm = new UserForm(root, user);
//   userForm.render()
// } else {
//   throw new Error('Root element not found!');
// }

#193 The UserForm's Render Method
#194 Rendering HTML
#195 Defining an Events Map
#196 Binding Event Handlers
#197 Adding Model Properties
#198 Binding Events on Class Name
#199 Adding Methods to the User
#200 Re-Rendering on Model Change
#201 Reading Input Text
#202 Strict Null Checks
#203 Reusable View Logic
#204 Extracting a View Class
#205 Extending with Generic Constraints
#206 Saving Data From a View
#207 UserEdit and UserShow
#208 Nesting with Regions
#209 Mapping Regions
#210 Testing Region Mapping
#211 View Nesting
#212 Collection Views
#213 CollectionView Implementation
#214 App Wrapup

 */
