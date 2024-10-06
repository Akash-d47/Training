fetchData
.then((data)=>{
    console.log('Data received', data);
    return data.id;
})
.then((id)=>{
    console.log('ID:', id);
})
.catch((error)=>{
    console.error('error',error);
});