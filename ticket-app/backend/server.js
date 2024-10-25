const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ticketRoutes = require('./routes/tickets');

const app = express();
const port = 3000;

// Connect to MongoDB (replace with your MongoDB URI if needed)
mongoose.connect('mongodb://localhost:27017/ticketDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api/tickets', ticketRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
