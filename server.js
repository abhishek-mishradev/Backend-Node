const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
// const Person = require("./models/person");

const passport = require("./auth");
const LocalStrategy = require("passport-local").Strategy;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleDateString()}] Request made to : ${req.origialUrl}`
  );
  next();
};
app.use(logRequest);



app.use(passport.initialize());

app.get(
  "/",
  passport.authenticate("local", { session: false }),
  function (req, res) {
    res.send("Welcome to the Hotels");
  }
);

// Get method

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

// const menuItemRoutes= require('./routes/menuItemRoutes')
// app.use('/menu', menuItemRoutes)

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
