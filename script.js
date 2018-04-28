
let [name, surname] = ['serhii', 'panchenko'];

console.log(name, surname);

let [firstName, lastName, ...other] = 'Serhii Panchenko and other people'.split(" ");

console.log(firstName, lastName); //Serhii Panchenko
console.log(other); //['and','other','people'];

let [guest1="Tom", guest2="Bill"] = [];

console.log(guest1, guest2); //Tom Bill

function getProfession() {
  return 'doctor';
}

let [visitorName, visitorProfession=getProfession()] = ['Jim'];

console.log(visitorName, visitorProfession); // Jim doctor

let options = {
  title: 'Menu',
  width: 200,
  height: 50
}

let {title, width, height: h, size:s='L'} = options;

console.log(title, h, s);

let {
  dishes: [chicken, burgers, nachos='nachos'],
  size: {
    wid:wi,
    hei
  }
} = {
  dishes: ['chicken','burgers'],
  size: {
    wid: 100,
    hei: 100
  }
}

console.log(chicken, burgers, wi, hei, nachos);

let {a} = {a: 5}

console.log(a);

let b = [4, 5, 6, 7];
let c = [1, 2, 3, ...b];

console.log(c) //1,2,3,4,5,6,7;
