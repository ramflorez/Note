const express = require("express");
const fs = require("fs");
const path = require ('path');

 //Express App

var app = express();
var PORT = process.env.PORT || 5050


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './Develop/public')));


require("./Develop/routing/html-routes.js")(app);
require("./Develop/routing/api-routes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});