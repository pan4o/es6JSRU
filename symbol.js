

let sym = Symbol();

console.log(typeof sym); //symbol

// name of symbold

let sym2 = Symbol('Sim');

console.log(sym2.toString()); //Symbold(Sim)

//использоваение

let isAdmin = Symbol('isAdmin');

let user = {
  name: 'Tom',
  [isAdmin]: true
}

console.log(user[isAdmin]); //true


let user2 = {
  name: 'Tom',
  [Symbol.for('isAdmin')]: 'yes admin'
}

console.log(Object.keys(user)); // ['name'] только name. isAdmin не доступен

console.log(user2[Symbol.for('isAdmin')]) //yes admin. а так доступен
