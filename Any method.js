const p1 = Promise.reject('Error 1');
const p2 = promise.resolve('Success');
const p3 = Promise.reject('Error 2');

Promise.any([p1, p2, p3]
    .then((value) => {
        
    })
)