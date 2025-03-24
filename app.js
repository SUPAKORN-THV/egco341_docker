const express = require('express')
const app =  express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})

// Run npm init -y to create package.json
// npm install express
// docker build -t egco341_docker .

// -d => run in background
// -p => port inner_Port:outer_Port
// --name  => Name of the container
// egco341_docker => name of the image

// docker run -d -p 3000:3000 --name node-app egco341_docker


// VS Code >Commit> GitHub Repo >> Github Action >> Docker image
//            <<                <<               <<

// Left hand side > open remote repository > open repository from github