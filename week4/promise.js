function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({
                status: 200,
                body: 'success'
            });
        } else {
            reject(new Error("The API is not working"));
        }
    });
}

// Example usage:
getFullResponseFromAPI(true)
    .then(response => {
        console.log(response); // { status: 200, body: 'success' }
    })
    .catch(error => {
        console.error(error.message); // This won't run for true
    });

getFullResponseFromAPI(false)
    .then(response => {
        console.log(response); // This won't run for false
    })
    .catch(error => {
        console.error(error.message); // "The API is not working"
    });