const Cinema = require('../models/cinemaModel');

const updateCinema = async (req, res) => {
  try {
    const id = req.params.id;
    const [updatedRows] = await Cinema.update(req.body, {
      where: { id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Cinema not found' });
    }

    const updatedCinema = await Cinema.findByPk(id);
    res.status(200).json(updatedCinema);
  } catch (err) {
    console.error('Error updating cinema:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateCinema
};
