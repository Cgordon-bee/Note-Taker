const express = require('express');
const path = require('path');
const apiRoutes = require("./Routes/apiRoutes");


// Set up for the express server & End points
const app = express();
const PORT = process.env.PORT || 3001;



//The public folder holds our base files i.e css, html etc, these are known as static files and are not likely to change
//app.use is our firststep in connecting to a "middleware" - middleware is another layer in which our requests are routed

// Built-in express method to call the next middleware in the stack.
// next();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use(express.static("db"));
app.use(express.static('public'));

app.use('/api/notes', apiRoutes);



//this section will set up 3 main routes, get, post & delete


// app.get is a method to route to homepage  shortcode =('/')
app.get('api/notes', (req, res) => 
res.sendFile(path.join(__dirname,"./public/notes.html"))
);

app.get("*", (req, res) =>{

  res.sendFile(path.join(__dirname, "./public/send.html"))
});


//app.listen is a method that accepts two arguments, 1st argument is to invoke our server, the 2nd argument is a callback function.
app.listen(PORT, () =>
  console.log(`server connected successfully http://localhost:${PORT}`)
);



