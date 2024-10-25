const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    route: String,
    dateOfJourney: String,
    selectedSeats: String,
    totalAmount: Number
});

module.exports = mongoose.model('Ticket', ticketSchema);
