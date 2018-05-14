

let promise = new Promise((resolve, reject) => {
  console.log('Loading...');

  setTimeout(() => {

    if (Math.random() > 0.5) {
      resolve('Hello User');
    } else {
      reject('Something Wrong:(');
    }

  }, 1000);
});

promise
.then(goodMessage => console.log(goodMessage))
.catch(badMessage => console.log(badMessage + ' and this is a bad news'))
.then(() => {
  let result = 4;
  console.log(`2+2=${result}`) //2+2=4
  return result;  
})
.then(result => console.log(`${result} > 3`)); // 4 > 3
