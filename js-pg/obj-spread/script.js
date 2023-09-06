let x;

const todo = {};

todo.id = 1;
todo.name = "Buy milk";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

const ob1 = {
  a: 1,
  b: 2,
};
const ob2 = {
  c: 3,
  d: 4,
};

const ob3 = {
  ...ob1,
  ...ob2,
};

x = ob3;
console.log(x);
