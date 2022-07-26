var fs = require("fs")

fs.writeFile("movies.txt", "Movie1, Movie 2, Movie 3", function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("file created")
    }
})