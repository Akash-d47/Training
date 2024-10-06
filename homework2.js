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