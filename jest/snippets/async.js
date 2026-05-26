function fetchData(callback){
    setTimeout(() => {
        callback("peanut butter");
    }, 1000);
}

export default fetchData;