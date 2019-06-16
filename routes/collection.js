const express = require('express');
const router = express.Router();

// Require controller modules.
const album_controller = require('../controllers/album_controller');

/// album ROUTES ///

// GET collection home page. (Maps to '/collection/')
router.get('/', album_controller.index);

// // GET request for creating a album. NOTE This must come before routes that display album (uses id).
// router.get('/albums/create', album_controller.album_create_get);

// POST request for creating album.
router.post('/albums/', album_controller.album_create);

// DELETE request to delete album.
router.delete('/albums/:id/', album_controller.album_delete);

// // POST request to delete album.
// router.post('/albums/:id/delete', album_controller.album_delete_post);

// // GET request to update album.
// router.get('/albums/:id/update', album_controller.album_update_get);

// POST request to update album.
router.put('/albums/:id/', album_controller.album_update);

// GET request for one album.
router.get('/albums/:id', album_controller.album_item);

// GET request for list of all albums.
router.get('/albums', album_controller.album_list);

module.exports = router;
