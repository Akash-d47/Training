//q1
function delay(ms) {  
    return new Promise(resolve => {  
        setTimeout(resolve, ms);  
    });  
}
delay(2000).then(() => {  
    console.log("Resolved after 2 seconds");  
});


//q2
function fetchUserData() {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            const userData = { id: 1, name: "John Doe" };  
            console.log("User data fetched:", userData);  
            resolve(userData);  
        }, 1000); 
    });  
}  

function fetchUserPosts(userId) {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            const userPosts = [  
                { id: 1, title: "Post 1", userId: userId },  
                { id: 2, title: "Post 2", userId: userId },  
            ];  
            console.log("User posts fetched:", userPosts);  
            resolve(userPosts);  
        }, 1000); 
    });  
}  


fetchUserData()  
    .then(user => {  
        return fetchUserPosts(user.id);  
    })  
    .then(posts => {  
        console.log("All posts:", posts);  
    })  
    .catch(error => {  
        console.error("Error fetching data:", error);  
    });

//q3

const randomPromise = new Promise((resolve, reject) => {  
    const randomNumber = Math.random(); 

    if (randomNumber > 0.5) {  
        resolve("Promise resolved successfully!");  
    } else {  
        reject("Promise rejected!");  
    }  
});  

  
randomPromise
    .then(successMessage => {  
        console.log(successMessage);  
    })  
    .catch(errorMessage => {  
        console.error(errorMessage);  
    });

//a1
function promiseAllSettled(promises) {  
    return new Promise((resolve) => {  
        const results = [];  
        let completedPromises = 0;  

        promises.forEach((promise, index) => {  
            Promise.resolve(promise)  
                .then(value => {  
                    results[index] = { status: 'fulfilled', value: value };  
                })  
                .catch(reason => {  
                    results[index] = { status: 'rejected', reason: reason };  
                })  
                .finally(() => {  
                    completedPromises++;  
                    if (completedPromises === promises.length) {  
                        resolve(results);  
                    }  
                });  
        });  
    });  
}  
 
const promise1 = Promise.resolve(3);  
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));  
const promise3 = Promise.resolve(42);  

promiseAllSettled([promise1, promise2, promise3])  
    .then(results => {  
        console.log(results);  
    });

//a2
// Simulate fetching data from a source  
function fetchData(source) {  
    return new Promise((resolve) => {  
        const delay = Math.random() * 2000 + 1000; // Random delay between 1s and 3s  
        setTimeout(() => {  
            resolve(`Data from ${source}`);  
        }, delay);  
    });  
}  

// Sequential fetching  
async function fetchSequentially(sources) {  
    const results = [];  
    for (const source of sources) {  
        const data = await fetchData(source);  
        results.push(data);  
    }  
    return results;  
}  

// Parallel fetching  
async function fetchInParallel(sources) {  
    return Promise.all(sources.map(source => fetchData(source)));  
}  

// Main function to compare execution times  
async function compareFetchMethods() {  
    const sources = ['Source 1', 'Source 2', 'Source 3', 'Source 4'];  

    // Measure sequential fetching time  
    console.time('Sequential Fetch Time');  
    const sequentialResults = await fetchSequentially(sources);  
    console.timeEnd('Sequential Fetch Time');  
    console.log('Sequential Results:', sequentialResults);  

    // Measure parallel fetching time  
    console.time('Parallel Fetch Time');  
    const parallelResults = await fetchInParallel(sources);  
    console.timeEnd('Parallel Fetch Time');  
    console.log('Parallel Results:', parallelResults);  
}  

// Run the comparison  
compareFetchMethods();

//a3

function firstPromise() {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve("First promise resolved!");  
        }, 1000);  
    });  
}  

function secondPromise() {  
    return new Promise((_, reject) => {  
        setTimeout(() => {  
            reject("Error occurred in the second promise!");  
        }, 1000);  
    });  
}  

 
function thirdPromise() {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve("Third promise resolved!");  
        }, 1000);  
    });  
}  

 
firstPromise()  
    .then(result => {  
        console.log(result);  
        return secondPromise();
    })  
    .then(result => {  
        console.log(result);  
        return thirdPromise();  
    })  
    .then(result => {  
        console.log(result);   
    })  
    .catch(error => {  
        console.error("Caught an error:", error);   
    });