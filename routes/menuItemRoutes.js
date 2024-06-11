const express = require("express");
const router = express.Router();
const MenuItem = require("../routes/");

router.post("/", async (req, res) => {
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
  router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  module.exports = router;