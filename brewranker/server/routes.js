const api = require('./conroller');
const bp = require('body-parser');

function router(app) {
    app.use(bp.json());
    app.get("/api/beers", api.getBeers);
    app.get("/api/beers/:id", api.getOneBeer);
    app.get("/api/brewery", api.getBrewery);
    app.get("/api/brewery/:id", api.getOneBrewery);
    app.post("/api/beers", api.makeBeer);
    app.post("/api/brewery", api.makeBrewery);
    app.patch("/api/beers/rate/:id", app.rateBeer);
    app.put("/api/beers/edit/:id", api.editBeer);
    app.put("/api/brewery/edit/:id", api.editBrewery);
    app.delete("/api/beers/:id", api.deleteBeer);
    app.delete("/api/brewery/:id", deleteBrewery);
    app.get("/");
}

module.exports = router;