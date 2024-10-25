const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// POST route to save ticket
router.post('/', async (req, res) => {
    try {
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.status(201).json({ message: 'Ticket saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving ticket', error: error.message });
    }
});

module.exports = router;
