

//map is collection for keys values

let map = new Map();

map.set('1','first');
map.set(2, 'second');
map.set(true, 'boolean');

console.log(map.get('1')); //first
console.log(map.get(2)); //second
console.log(map.get(true)); //boolean
console.log(map.size); //3

//chain set method

map.set(3,3).set(4,4).set(5,5);

console.log(map.get(5)); //5

//set kets in init

let testMap = new Map([
  [1,'test'],
  ['2','test2']
])

console.log(testMap.get(1)); //test
console.log(testMap.get('2')); //test2

//objects can be keys

let a = {
  name: 'Tom'
}

testMap.set(a, 'user');

console.log(testMap.get(a)); //user

//map.delete(key), map.clear(key), map.has(key)

let d = new Map([
  [1,1],
  [2,2],
  [3,3],
  [4,4]
]);

d.delete(2);

console.log(d) //{1 => 1, 3 => 3, 4 => 4}

console.log(d.has(3)); //true

d.clear();

console.log(d); // {}

//iteration methods for Maps

let receipMap = new Map([
  ['apples','2'],
  ['oranges','3'],
  ['milk','1 liter']
]);

//loop by keys

for(let key of receipMap.keys()) {
  console.log(key); //apples orage milk
}

//loop for values

for(let value of receipMap.values()) {
  console.log(value); // 2 3 1 liter
}

// loop for entries

for(let entry of receipMap) { // same receipMap.entries()
  console.log(entry); // apples 2 oranges 3 milk 1 liter
}

// map has default forEach methods

receipMap.forEach((key, value) => {
  console.log(`${key} ${value}`);
});

//2 apples
//3 oranges
//1 liter milk


//SET
//save value only once
let set = new Set();

let vasya = {name: 'Vasya'},
    kolya = {name: 'Kolya'},
    petya = {name: 'Petya'};

set.add(vasya);
set.add(vasya);
set.add(vasya);
set.add(vasya);
set.add(kolya);
set.add(petya);
set.add(petya);
set.add(petya);

console.log(set.size); //3

//iterator for set
set.forEach((item) => {
  console.log(item.name); //Vasya Kolya Petya
});

/*
defalul methods of Set
add() delete() has() clear()
*/
