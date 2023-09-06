let x;

const person = {
  name: "john",
  age: 28,
  isAdmin: true,
  address: {
    street: "new street",
    door_no: "8A/41",
    pincode: 89782,
  },
};

x = person.address.door_no;
console.log(x);
