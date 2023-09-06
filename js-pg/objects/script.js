let x;

const person = {
  name: "jane",
  age: 28,
  isAdmin: true,
  address: {
    street: "new street",
    door_no: "8A/41",
    pincode: 89782,
  },
  hobbies: ["fishing", "hiking", "swimming"],
};

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet((person.name = "maddy"));
x = person;

console.log(x);
