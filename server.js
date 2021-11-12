const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

const notes = require('./db/db.json');



// instruction to handle Asychronous processess 
const readFileAsync = util.promisify (fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// Set up for the express server & End points
const app = express();
const PORT = process.env.PORT || 30001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("db"));


//The public folder holds our base files i.e css, html etc, these are known as static files and are not likely to change
//app.use is our firststep in connecting to a "middleware" - middleware is another layer in which our requests are routed

app.use(express.static('public'));
// Built-in express method to call the next middleware in the stack.
// next();


//this section will set up 3 main routes, get, post & delete


// app.get is a method to route to homepage  shortcode =('/')
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));


app.get("api/notes", function(req, res) {
readFileAsync ();


  res.sendFile(path.join(__dirname, './public/send.html'))
});

//path.join is a method for creating paths to our route
app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, '/.public/paths.html'))
);

//app.listen is a method that accepts two arguments, 1st argument is to invoke our server, the 2nd argument is a callback function.
app.listen(PORT, () =>
  console.log(`server connected successfully http://localhost:${PORT}`)
);




// app.use(middleware);

// app.get('/', (req, res) => res.json(`GET route`));
// app.post('/', (req, res) => res.json(`POST route`));
// app.put('/:id', (req, res) => res.json(`PUT route`));
// app.delete('/:id', (req, res) => res.json(`DELETE route`));
// app.patch('/:id', (req, res) => res.json(`PATCH route`));

// app.listen(PORT, () =>
//   console.log(`Listening for requests on port ${PORT}! `)
// );
