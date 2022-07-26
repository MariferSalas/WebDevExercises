var fs = require("fs")

fs.readFile("movies.txt", 'utf8', (err,data) => {
    if(err){
        console.log(err)
    }
    else{
        var datos = data.split(',');
        console.log(datos)
    }
})