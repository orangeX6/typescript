"use strict";
//_ ARRAY, OBJECTS, TUPLE, ENUM
// const person:object = {
//   name: "Orange",
//   age: 26,
// };
// console.log(person.name); // We get error as we don't specify anything about the object
// const person = {
//   name: "Orange",
//   age: 30,
// };
// _ role as a TUPLE
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Orange",
//   age: 26,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// person.role[1] = 10; //! ERROR
// person.role = [1, "admin", "user"]; // ! ERROR
// person.role.push("admin"); // _ push works on tuples. So we need to be careful about this
// _ role as an ENUM
var Role;
(function (Role) {
    Role["AUTHOR"] = "admin";
    Role[Role["ADMIN"] = 9] = "ADMIN";
    Role[Role["READ_ONLY"] = 10] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    name: "Orange",
    age: 26,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
let favActivities;
favActivities = ["Sports", "Cooking"];
console.log(person.name);
console.log(person.role);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
//# sourceMappingURL=non-primitive.js.map