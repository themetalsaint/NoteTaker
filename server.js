const express = require("express")
const app = express()
const PORT = process.env.PORT || 3630;

app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true})) //look this up
app.use(express.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`)
})