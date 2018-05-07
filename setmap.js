

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
