
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
async function run(){
  const msg = await sayHelloAsync();
  console.log(msg);
}

run();




