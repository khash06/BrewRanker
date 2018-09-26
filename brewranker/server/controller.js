const Ratings = require("./models");
const Beers = require("./models");
const Breweries = require("./models");

function getBeers(req, res)
{
    Beers.find({})
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function getOneBeer(req, res)
{
    Beers.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function getBrewery(req, res)
{
    Breweries.find({})
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function getOneBrewery(req, res)
{
    Breweries.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function makeBeer(req, res)
{
    Beers.create(req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function makeBrewery(req, res)
{
    Breweries.create(req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function rateBeer(req, res)
{
    Beers.findOneAndUpdate({_id: req.params.id}, {$push: {ratings: req.body}})
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function editBeer(req, res)
{
    Beers.findOneAndUpdate(req.params.id, req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function editBrewery(req, res)
{
    Breweries.findByIdAndUpdate(req.params.id, req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function deleteBeer(req, res)
{
    Beers.findByIdAndRemove(req.params.id)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}

function deleteBrewery(rew, res)
{
    Breweries.findByIdAndRemove(req.params.id)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}


module.exports = {
    getBeers: getBeers,
    getOneBeer: getOneBeer,
    getBrewery: getBrewery,
    getOneBrewery: getOneBrewery,
    makeBeer: makeBeer,
    makeBrewery: makeBrewery,
    rateBeer: rateBeer, 
    editBeer: editBeer,
    editBrewery: editBrewery,
    deleteBeer: deleteBeer,
    deleteBrewery: deleteBrewery
}