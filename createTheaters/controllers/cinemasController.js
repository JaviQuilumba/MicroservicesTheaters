const Cinema = require('../models/cinemaModel');

const createCinema = async (req, res) => {
  try {
    const newCinema = await Cinema.create(req.body);
    res.status(201).json(newCinema);
  } catch (err) {
    console.error('Error creating cinema:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCinema
};
