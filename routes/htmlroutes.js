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

    //Working on Delete
//     app.delete('/api/notes/:id', (req, res) => {
//     const chosenId = req.params.id
//     let notes = require('../db/db.json');
//     for (let i = 0; i < notes.length; i++) {
//       if (notes[i].id === chosenId) {
//         notes.splice(i, 1)
//       }
//     }
//     writeFileAsync('./db/db.json', JSON.stringify(notes), (err) =>
//       err ? console.error(err) : console.log('note deleted! New notes: ', notes)).then(() => { res.json(notes) })
//   })

}