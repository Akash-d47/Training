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
