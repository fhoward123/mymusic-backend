const Album = require('../models/albums');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all albums.
exports.album_list = function(req, res) {
    // res.send('NOT IMPLEMENTED: album list');
    Album.find({}, (err, foundAlbums) => {
        console.log('album_list: ', foundAlbums)
        res.json(foundAlbums);
    });
};

// Display detail page for a specific album.
exports.album_item = function(req, res) {
    // res.send('NOT IMPLEMENTED: album item: ' + req.params.id);
    Album.find({}, (err, foundAlbum) => {
        console.log('album_list: ', foundAlbum)
        // Data is returned in array.  Only one item searched so
        // only need first item in array which is the album object
        res.json(foundAlbum[0]);
    });
};

// Handle album create on POST.
exports.album_create = function(req, res) {
    // res.send('NOT IMPLEMENTED: album create POST');
    console.log('Add new album: ', req.body);
    Album.create(req.body, function(error, createdAlbum) {
        if (error) {
            console.log('Error in album controller: POST: ', error.message);
        }
        else {
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
            console.log('Error in album controller: DELETE: ', error.message);
        }
        else {
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
            console.log('Error in album controller: PUT: ', error.message);
        }
        else {
            res.json(editedAlbum);
        }
    });
};
