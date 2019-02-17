const express = require("express"),
    app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("<h1>Site Under Construction</h1>");
});

app.all("*", (req, res) => {
    res.status(404);
    res.send("<title>404 - Page not found</title><h1>404</h1><p>Page does not exist</p>")
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}!`);
});