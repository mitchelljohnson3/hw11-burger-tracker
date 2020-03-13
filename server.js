const express = require("express");
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sets up express to use handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static('./public'));

// Routes
// =============================================================
app.use('/', require('./controllers/burger_controller.js').router);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});