

//for of

let arr = [1,2,3];

for (let value of arr) {
  console.log(value);
}

/*
1
2
3
*/

// iterator of strings

for (let char of "Hello") {
  console.log(char);
}

/*
H
e
l
l
o
*/

let range = {
  from: 1,
  to: 5
}


range[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;

  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}


for(let num of range) {
  console.log(num);
}
