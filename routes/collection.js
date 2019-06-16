const express = require('express');
const router = express.Router();

// Require controller modules.
const album_controller = require('../controllers/album_controller');

/// album ROUTES ///

// GET collection home page. (Maps to '/collection/')
router.get('/', album_controller.index);

// POST request for creating an album.
router.post('/albums/', album_controller.album_create);

// DELETE request to delete an album.
router.delete('/albums/:id/', album_controller.album_delete);

// PUT request to update an album.
router.put('/albums/:id/', album_controller.album_update);

// GET request for get one album.
router.get('/albums/:id', album_controller.album_item);

// GET request to list all albums.
router.get('/albums', album_controller.album_list);

module.exports = router;
