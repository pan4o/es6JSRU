
function* generatorSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generatorSequence();

let one = generator.next();

console.log(one); // {value: 1, done: false}

let two = generator.next();

console.log(two); // {value: 2, done: false}

let three = generator.next();

console.log(three); // {value: 3, done: true}

let gen = generatorSequence();

gen.next();
gen.next();
console.log(gen.next()); // {value: 3, done: true}

//generator iterators

function* gen2() {
  yield 1;
  yield 2;
  return 3;
}

let generator2 = gen2();

for (let val of generator2) {
  console.log(val); // 1 2 return в таки случая игнорируется, выводятся только yield
}

function* generateMore(start, end) {
  for(let i = start; i <= end; i++) {
    yield i;
  }
}

let testGen = generateMore(1, 10);

console.log([...testGen]); // [1,2,3,4,5,6,7,8,9,10]


function* generateMoreNum() {
  yield* generateMore(11, 14);
  yield* generateMore(20,25);
}
let wr = generateMoreNum();

console.log(wr.next()); // {value: 11, done: false}
console.log(wr.next()); // {value: 12, done: false}
console.log([...wr]) // [13, 14, 20, 21, 22, 23, 24, 25]


function* justGen() {
  let ask1 = yield "2+2?";

  let ask2 = yield "3*3?";

  alert(ask1);
}

let j = justGen();

alert(j.next().value);
alert(j.next(4).value);
