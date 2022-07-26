var fs = require("fs")

var texto = process.argv[2]

fs.appendFile("ejemplo.txt", texto + ",\r\n", err => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Element has been added")
    }
})