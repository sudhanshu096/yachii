const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

const PORT = 3000;

const products = [
  { id: 1, name: 'Shoes', price: '$50', image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Watch', price: '$80', image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Bag', price: '$60', image: 'https://via.placeholder.com/100' },
];

// REST endpoint to fetch products
app.get('/products', (req, res) => {
  res.json(products);
});

// REST endpoint to generate room ID (optional)
app.post('/create-room', (req, res) => {
  const roomId = uuidv4();
  res.json({ roomId });
});

// WebSocket connection
io.on('connection', socket => {
  console.log('User connected:', socket.id);

  // Join specific product chat room
  socket.on('joinRoom', roomID => {
    socket.join(roomID);
    console.log(`User ${socket.id} joined room ${roomID}`);
  });

  // Leave room
  socket.on('leaveRoom', roomID => {
    socket.leave(roomID);
    console.log(`User ${socket.id} left room ${roomID}`);
  });

  // Handle incoming chat message
  socket.on('message', data => {
    const { roomID, ...message } = data;
    console.log(`Message in room ${roomID}:`, message);
    socket.to(roomID).emit('message', message); // Only broadcast to that room
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
