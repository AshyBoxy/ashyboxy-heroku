const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(dir + "randomPokemon/Facts.html");
});

router.get("/picture", (req, res) => {
    res.sendFile(dir + "randomPokemon/CutePicture.html");
});

router.all("*", (req, res) => {
    res.status(404);
    res.render("error", {
        "url": req.protocol + '://' + req.get('host') + "/randomPokemon" + req.url
    });
});

module.exports = router;