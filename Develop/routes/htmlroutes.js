const path = require("path")
module.exports= (db)=>{
    db.get("/notes", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    db.post("/notes", (req, res)=>{
        res.send()
    })

    db.get("*", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

}