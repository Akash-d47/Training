function fetchUser(userId){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({userId, username: "AKASH"});
        }, 1000);
        });
    
}
function fetchPosts(username){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['post 1', 'post 2']);
        }, 1000);
    });
}
fetchUser(1)
.then((user) => {
    console.log('User:', user);
    return fetchPosts(user.username);
})
.then((posts) => {
    console.log('Posts:',posts);
})
.catch((error) => {
    console.error('Error:', error);
});