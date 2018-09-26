const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema ({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
}, {timestamps: true});

const BeerSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    brewery: {
        type: String, 
        required: true
    },
    type: {
        type: String,
        required: true
    },
    abv: {
        type: Number,
        required: true
    },
    ibu: {
        type: Number,
        required: true
    },
    ratings: [RateSchema]
}, {timestamps: true});

const BrewerySchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    beers: [BeerSchema]
}, {timestamps: true});

mongoose.connect('mongodb://localhost:27017/beerrankerdb', {useNewUrlParser: true}, (errs)=>console.log(errs));

const Ratings = mongoose.model('ratings', RateSchema);
const Beers = mongoose.model('beers', BeerSchema);
const Breweries = mongoose.model('breweries', BrewerySchema);

module.exports = Ratings, Beers, Breweries;