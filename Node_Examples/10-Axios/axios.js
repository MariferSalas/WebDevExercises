var axios = require("axios")

axios.get("https://regres.in/api/users")

.then(response =>{
    console.log(response.data)
})