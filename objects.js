
//Korotkoe svoystvo

let name = "Victor";
let isAdmin = true;

let obj = {
  name,
  isAdmin
}

console.log(JSON.stringify(obj)); //{"name":"Victor","isAdmin":true}


//Vichislyaemie svoystva

let prop = 'surname';

let person = {
  [prop]:'Petrov'
}

console.log(person.surname); //Petrov

let a = 'my ';
let b = 'green ';
let c = 'crocodile';

let animal = {
  [a + b + c]: 'Gena'
}

console.log(animal['my green crocodile']); //Gena

//Object.assign

let user = {name: 'Irvin', age: 18}
let info = {age: 20, gender: 'male'}
let position = {job: 'admin'}

let assignUser = Object.assign(user, info, position);

console.log(assignUser); // {name: "Irvin", age: 20, gender: "male", job: "admin"}

//user has been changed too
console.log(user); // {name: "Irvin", age: 20, gender: "male", job: "admin"}

//he also can clone Objects

let userClone = {};

Object.assign(userClone, user);

console.log(userClone); // {name: "Irvin", age: 20, gender: "male", job: "admin"}\

//Object.is(value1, value2)

let n = 34;
let t = 34;

console.log(Object.is(n, t)); // true

//methods of objects

let testObj = {
  name: 'Ingvar',
  getName() {
    return this.name;
  }
}

console.log(testObj.getName()); //Ingvar

//Getter

let ceoName = "bill";
let ceoSurname = "gates"

let microsoftFounder = {
  ceoName,
  ceoSurname,
  get fullName() {
    return `${ceoName} ${ceoSurname}`;
  }
}

console.log(microsoftFounder.fullName); //bill gates

//method with name in variable

let getName = "getVasyaName";

let vasya = {
  name: 'vasya',
  [getName]() {
    return this.name;
  }
}

console.log(vasya.getVasyaName()); //vasya

//Super

let walkingDead = {
  walk() {
    console.log("I'm walking");
  }
};

let karl = {
  __proto__: walkingDead,
  walk() {
    super.walk();
  }
}

karl.walk(); //I'm walking

let walk = karl.walk;

walk(); //I'm walking

//setPrototypeOf(object, newProto);

let foo = {
  name: 'foo',
  age: 34
}

let bar = {
  name: 'bar',
  getAge() {
    return super.age
  }
}

Object.setPrototypeOf(bar, foo);

console.log(bar.__proto__); //{name: "foo", age: 34}
console.log(bar.getAge()); //34
