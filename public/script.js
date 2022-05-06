// importing the express package
const express = require('express');

// initialising the express framework
const app = express();

// serving static files from the public folder
app.use(express.static('public'));

// serving the index from the root path
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
   })

// starting the server,listening for incoming traffic and logging a message to the console
let server = app.listen(8888, function(){
 console.log("App server is running on port 8080");
 });