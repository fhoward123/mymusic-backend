const Album = require('../models/albums');
const async = require('async');

exports.index = function(req, res, next) {
    // res.send('NOT IMPLEMENTED: Site Home Page');
    async.parallel({
        album_count: function(callback) {
            // Pass an empty object as match condition to find all documents of this collection
            Album.countDocuments({}, callback);
        }
    }, function(error, results) {
        if (error) {
            console.log('index ERROR: ', error.message);
        }
        else {
            // Using res.render('index') will use 'index.jade' in 'views' dir
            // res.render('index', { title: 'Music DB Home', error: error, data: results });
            console.log('index: ', results)
            res.json(results);
        }
    });
};

// Display list of all albums.
exports.album_list = function(req, res) {
    // res.send('NOT IMPLEMENTED: album list');
    Album.find({}, (error, foundAlbums) => {
        if (error) {
            console.log('album_list ERROR: ', error.message);
        }
        else {
            console.log('album_list: ', foundAlbums)
            res.json(foundAlbums);
        }
    });
};

// Display detail page for a specific album.
exports.album_item = function(req, res) {
    // res.send('NOT IMPLEMENTED: album item: ' + req.params.id);
    Album.findById(req.params.id, (error, foundAlbum) => {
        if (error) {
            console.log('album_item ERROR: ', error.message);
        }
        else {
            console.log('album_item: ', foundAlbum)
            res.json(foundAlbum);
        }
    });
};

// Handle album create on POST.
exports.album_create = function(req, res) {
    // res.send('NOT IMPLEMENTED: album create POST');
    console.log('Add new album: ', req.body);
    Album.create(req.body, function(error, createdAlbum) {
        if (error) {
            console.log('album_create ERROR: ', error.message);
        }
        else {
            console.log('album_create: ', createdAlbum)
            res.json(createdAlbum);
        }
    });
};

// Display album delete form on GET.
exports.album_delete = function(req, res) {
    // res.send('NOT IMPLEMENTED: album delete GET');
    console.log('Delete album: ', req.params.id);
    Album.findByIdAndDelete(req.params.id, function(error, deletedAlbum) {
        if (error) {
            console.log('album_delete ERROR: ', error.message);
        }
        else {
            console.log('album_delete: ', deletedAlbum)
            res.json(deletedAlbum);
        }
    });
};

// Handle album update on PUT.
exports.album_update = function(req, res) {
    // res.send('NOT IMPLEMENTED: album update PUT');
    console.log('Edit album: ', req.params.id);
    Album.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(error, editedAlbum) {
        if (error) {
            console.log('album_update ERROR: ', error.message);
        }
        else {
            console.log('album_update: ', editedAlbum)
            res.json(editedAlbum);
        }
    });
};
