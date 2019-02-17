const express = require("express"),
    app = express();

const favicon = require("express-favicon");

const PORT = process.env.PORT || 8080;
global.dir = __dirname + "/";

if (process.env.ENVIRONMENT == "LOCAL") app.use(require("morgan")("dev"));

app.use(favicon(dir + "assets/favicon.png"));
app.use("/assets", express.static(dir + "assets/"));

app.get("/", (req, res) => {
    res.send("<title>Under Construction</title><h1>Site Under Construction</h1>");
});

app.all("*", (req, res) => {
    res.status(404);
    res.send("<title>404 - Page not found</title><h1>404</h1><p>Page does not exist</p>")
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}!`);
});