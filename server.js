const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');
const apiRoutes = require("./Routes/apiRoutes");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const app = express();
const PORT = process.env.PORT || 3001;


// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("db"));
app.use(express.static('public'));

app.use('/api/notes', apiRoutes);


//this section will set up 3 main routes, get, post & delete


// app.get is a method to route to notes.html in the public folder.
app.get('api/notes', (req, res) => {
res.sendFile(path.join(__dirname,"./public/notes.html"))
});

app.get("*", (req, res) =>{
res.sendFile(path.join(__dirname, "./public/index.html"))
});
app.post('/api/notes', async(req, res) => {
  const db = await readFileAsync('db/db.json', 'utf8')
console.log(db)
// fs.readFile(`${__dirname}./db/db.json`, "utf8", function (err){
//   if (!err) {
//           console.log(err);
    
//         } 
//           savedNotes =JSON.parse(savedNotes);
    
//           const viewNewNote ={
//             title: req.body.title,
//             text: req.body.text,
//             id:savedNotes.length + 1,
    
          
//         }
    

// })

})


//app.listen is a method that accepts two arguments, 1st argument is to invoke our server, the 2nd argument is a callback function.
app.listen(PORT, () =>{
  console.log(`server connected successfully http://localhost:${PORT}`)
});
