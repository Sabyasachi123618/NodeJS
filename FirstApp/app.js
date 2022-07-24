var express = require('express');
var app = express();
app.get("/cats", (req, res) => {
    console.log("got a new cat request");
    res.send("<h1>Cats</h1>");
})
app.get("/dogs/:name/:id", (req, res) => {
    var { name, id } = req.params;
    console.log("got a dog request");
    res.send(`<h1>${name} with id ${id} is missing</h1>`);
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`results for ${q}`);
})
app.listen(3000, () => {
    console.log("Serving on port 3000");
})