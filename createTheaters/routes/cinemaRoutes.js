const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinemasController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Cinema:
 *       type: object
 *       required:
 *         - name
 *         - capacity
 *         - location
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del cine
 *         name:
 *           type: string
 *           description: Nombre del cine
 *         capacity:
 *           type: integer
 *           description: Capacidad del cine
 *         location:
 *           type: string
 *           description: Ubicación del cine
 */

/**
 * @swagger
 * /cinemas:
 *   post:
 *     summary: Crear un nuevo cine
 *     tags: [Cinemas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cinema'
 *     responses:
 *       201:
 *         description: El cine fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cinema'
 *       500:
 *         description: Error del servidor
 */
router.post('/cinemas', cinemaController.createCinema);

module.exports = router;
