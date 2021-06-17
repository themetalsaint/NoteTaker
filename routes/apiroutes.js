const json = require("../db/db.json");
const fs = require("fs");

//need to use a unqiue id package or math.floor to create a unique id
const {v4: uuidv4} = require("uuid");

module.exports = (db) => {
    db.get("/api/notes", (req, res) =>{
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if(err){
                console.log(err)
            }
            else{
                res.json(JSON.parse(data))
            }
        })
    })
    db.post("/api/notes", (req, res) =>{
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if(err){
                console.log(err)
            }
            else{
                const noteData = JSON.parse(data)
                const noteContent = req.body
                const key = "id"
                const noteId = uuidv4()
                noteContent[key] = noteId
                noteData.push(noteContent)
                fs.writeFile("db/db.json", JSON.stringify(noteData), (err) =>{
                    if(err)throw err;
                    res.json(noteData)

                })


            }
        })
    })
}


