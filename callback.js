function fetchData(callback){
    setTimeout(() =>{
        const data = {id:1, name: "akash"};
        callback(data);

    }, 1000);
}
fetchData((data) =>{
    console.log('Data received', data);
});