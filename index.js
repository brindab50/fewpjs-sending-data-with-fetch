// Add your code here

// create a function that takes two strings as arguments
// on representing a user's name and the other representing 
// a users email 

function submitData(usersName, usersEmail){
    let usersData = 'http://localhost:3000/users'
    return fetch(usersData, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            name, 
            email 

        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    .catch( function ( error ) {
        document.body.innerHTML = error.message
    })

    }
    

