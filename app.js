const express = require("express");
const mongoose = require("mongoose");
const cron = require("node-cron");
const fetchData = require("./services/fetchData");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB", err);
    });

// Background job to fetch cryptocurrency data every 2 hours
cron.schedule("0 */2 * * *", fetchData);

// Sample route to check if server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
