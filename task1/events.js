// The events module provides an event-driven programming mechanism. 
// It allows you to create, emit, and listen for custom events in your Node.js applications.

// events_example.js
const EventEmitter = require('events');

// Create a custom event emitter
const myEmitter = new EventEmitter();

// Define an event listener
myEmitter.on('myEvent', () => {
    console.log('Custom event emitted!');
});

// Emit the custom event
myEmitter.emit('myEvent');
