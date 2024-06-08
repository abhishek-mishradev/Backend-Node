const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/person");
const bodyParser = require("body-parser");
const MenuItem = require("./models/menuItem");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to the Hotels");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    await newPerson.save();
    console.log("data saved");
    res.status(201).json({ message: "Person created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/menu-item", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    await newMenuItem.save();
    console.log("data saved");
    res.status(201).json({ message: "Menu item created successfully" });
  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/menu-item", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get method

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
