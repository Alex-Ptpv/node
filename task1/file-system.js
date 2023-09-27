// The fs module provides file system-related functionality, 
// such as reading and writing files, working with directories,
// and file manipulation. 

// fs_example.js
const fs = require('fs');

// Write content to a file
fs.writeFile('sample.txt', 'Hello, Node.js!', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File written successfully!');
    }
});

// Read content from a file
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File content:', data);
    }
});
