type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I1 = Person["age" | "name"]; // number | string
type I2 = Person[keyof Person]; // number | string | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // boolean | string

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 15 },
  { name: "Eve", age: 15 },
];

type Person1 = (typeof MyArray)[number]; // {name: string' age: number}

type Age1 = (typeof MyArray)[number]["age"]; // number
