// Our Express Server
//Imported third party module for epress
let express = require('express');

//created server object
let app = express();

//assign a port to constant
const port = 3000;
// About route
app.get('/about', (req, res) =>{
  res.send('About Us');
});

// Contact route
app.get('/contact', (req, res) =>{
  res.send('Contact Us');
});

// main root for any website
app.get('/', (req, res) =>{
  res.send('Welcome');
});

// setup event loop 
app.listen(3000, () =>{
  console.log(`Server running at http://localhost: ${port}`);
});