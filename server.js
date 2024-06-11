const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");


app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Welcome to the Hotels");
});






// Get method




const personRoutes=  require('./routes/personRoutes');
app.use('/person', personRoutes);

// const menuItemRoutes= require('./routes/menuItemRoutes')
// app.use('/menu', menuItemRoutes)


app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
