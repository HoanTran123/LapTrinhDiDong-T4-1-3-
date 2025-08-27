
function sayHelloAsync(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello async!`);
        }, 2000);
    });
}

sayHelloAsync().then((message) => {
    console.log(message);
});

function resolveWithNumber10(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

resolveWithNumber10().then((num) => {
    console.log(num);
});


function rejectWithError(): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    })
  };

rejectWithError().catch((error) => {
    console.error(error.message);
});

//  const getRandomNumber = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   if(randomNumber){
//     resolve(randomNumber);
//   }else{
//     reject(randomNumber)
//   }
//  })

// getRandomNumber().then(() => {

// })


const myRandomNumber = new Promise<number>((resolve, reject) => {
    const ranDom = Math.random(); 
    if (ranDom > 10) {
        resolve(ranDom);
    } else {
        reject(new Error("Rando number is not greater than 10"));
    }
});

myRandomNumber
    .then((number) => {
        console.log("Random number:", number);
    })
        .catch((error) => {
        console.log(error.message);
    });

