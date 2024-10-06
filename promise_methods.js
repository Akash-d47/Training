Promise.all([promise1, promise2, ...])
.then((results) => {
    //Results is an array o resolved values
})
.catch((error) => {
    //Error rom the irst rejected promise
});

const p1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'));
const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'second'));

Promise.race([p1, p2])
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.error('error:', error)
});