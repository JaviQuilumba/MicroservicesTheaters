const Cinema = require('../models/cinemasModel');

const listCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.findAll();
    res.json(cinemas);
  } catch (err) {
    console.error('Error fetching cinemas:', err);
    res.status(500).json({ error: err.message });
  }
};

const getCinemaById = async (req, res) => {
  try {
    const id = req.params.id;
    const cinema = await Cinema.findByPk(id);
    if (!cinema) {
      return res.status(404).json({ message: 'Cinema not found' });
    }
    res.json(cinema);
  } catch (err) {
    console.error('Error fetching cinema by id:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listCinemas,
  getCinemaById,
};
