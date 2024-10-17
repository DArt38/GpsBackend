const express = require('express');
const router = express.Router();
const Coordinate = require('../models/coordinate');

// Ruta para recibir las coordenadas
router.post('/coordinates', async (req, res) => {
    const { latitude, longitude } = req.body;

    try {
        const newCoordinate = new Coordinate({ latitude, longitude });
        await newCoordinate.save();
        res.status(201).json({ message: 'Coordinate saved successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Ruta para obtener la última coordenada
router.get('/coordinates', async (req, res) => {
    try {
      const latestCoordinate = await Coordinate.findOne().sort({ timestamp: -1 });
      res.json(latestCoordinate);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch coordinates' });
    }
  });

module.exports = router;
