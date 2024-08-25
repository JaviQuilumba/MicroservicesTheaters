const Cinema = require('../models/cinemaModel');

const deleteCinema = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedRows = await Cinema.destroy({
      where: { id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Cinema not found' });
    }

    res.status(204).end();
  } catch (err) {
    console.error('Error deleting cinema:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteCinema
};
