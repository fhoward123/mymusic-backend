const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = Schema({
    submitter: String,
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    imageURL: String,
    genre: String,
    label: String,
    trackCnt: Number,
    runtime: String,
    media: String,
    yearMFG: Number,
    yearReleased: Number,
    barcode: Number,
    songs: [
        {
            title: String,
            trackNum: Number,
            playtime: String
        }
    ],
}, {timestamps: true});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
