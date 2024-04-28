const { io } = require('./server');

io.on('connection', socket => {
    console.log('Client connected');

    socket.on('message', message => {
        console.log('Received message:', message);
        // Process the message here without sending anything back to the client
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('error', err => {
        console.error('Socket error:', err.message);
    });
});
