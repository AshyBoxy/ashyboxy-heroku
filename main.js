const express = require("express"),
    app = express();

const favicon = require("express-favicon");

const PORT = process.env.PORT || 8080;
global.dir = __dirname + "/";

if (process.env.ENVIRONMENT == "LOCAL") app.use(require("morgan")("dev")) && console.log("Running locally!");
else console.log("Running on Heroku");

app.set('view engine', 'pug');

app.use(favicon(dir + "assets/favicon.png"));
app.use("/assets", express.static(dir + "assets/"));
app.use("/public", express.static(dir + "public/"));

app.use("/randomPokemon", require("./routes/randomPokemon"));

app.get("/", (req, res) => {
    res.render("main");
});

app.all("*", (req, res) => {
    res.status(404);
    res.render("error", {
        "url": req.protocol + '://' + req.get('host') + req.url
    });
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}!`);
});