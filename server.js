const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');
const apiRoutes = require("./Routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3001;


// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("db"));
app.use(express.static('public'));

app.use('/api/notes', apiRoutes);


//this section will set up 3 main routes, get, post & delete




//app.listen is a method that accepts two arguments, 1st argument is to invoke our server, the 2nd argument is a callback function.
app.listen(PORT, () =>{
  console.log(`server connected successfully http://localhost:${PORT}`)
});
