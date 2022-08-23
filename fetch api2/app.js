fetch("settings.json").then(
    response => {
        return response.json()
    }

).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(responseJson => {
    responseJson.forEach(item => console.log(item))
})