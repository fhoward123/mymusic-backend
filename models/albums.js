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
    trackCnt: String,
    runtime: String,
    media: String,
    yearMFG: String,
    countryMFG: String,
    yearReleased: String,
    barcode: String,
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
