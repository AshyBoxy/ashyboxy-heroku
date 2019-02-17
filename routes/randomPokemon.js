const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>...</h1>");
});

router.all("*", (req, res) => {
    res.status(404);
    res.render("error", {
        "url": req.protocol + '://' + req.get('host') + "/randomPokemon" + req.url
    });
});

module.exports = router;