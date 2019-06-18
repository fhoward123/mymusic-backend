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
    countryMFG: String,
    yearReleased: {
        type: Number,
        min: 1600,
        max: 2040
    },
    barcode: {
        type: String,
        minlength: 12,
        maxlength: 12
    },
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
