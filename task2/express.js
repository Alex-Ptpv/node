// Import the 'express' library and create an instance of the Express application.
const express = require('express');
const app = express();

// Define the port number that the server will listen on.
const port = 3000;

// Define a route for handling HTTP GET requests to the root path ('/').
app.get('/', (req, res) => {
  // When a GET request is made to '/', send the response 'Hello World!'
  res.send('Hello World!');
});

// Start the Express server and make it listen on the specified port.
app.listen(port, () => {
  // Once the server is running, log a message indicating where it's listening.
  console.log(`Example app listening at http://localhost:${port}`);
});
