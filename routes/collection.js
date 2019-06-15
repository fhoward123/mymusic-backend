const express = require('express');
const router = express.Router();

// Require controller modules.
const album_controller = require('../controllers/album_controller');

/// album ROUTES ///

// GET collection home page. (Maps to '/collection/')
router.get('/', album_controller.index);

// GET request for creating a album. NOTE This must come before routes that display album (uses id).
router.get('/album/create', album_controller.album_create_get);

// POST request for creating album.
router.post('/album/create', album_controller.album_create_post);

// GET request to delete album.
router.get('/album/:id/delete', album_controller.album_delete_get);

// POST request to delete album.
router.post('/album/:id/delete', album_controller.album_delete_post);

// GET request to update album.
router.get('/album/:id/update', album_controller.album_update_get);

// POST request to update album.
router.post('/album/:id/update', album_controller.album_update_post);

// GET request for one album.
router.get('/album/:id', album_controller.album_detail);

// GET request for list of all albums.
router.get('/albums', album_controller.album_list);

module.exports = router;
