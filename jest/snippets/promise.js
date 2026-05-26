function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("peanut butter")

            // reject("err")
        }, 1000)
    })
}

export default fetchPromise