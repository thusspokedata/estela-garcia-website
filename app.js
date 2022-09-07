require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
const express = require("express");
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const { isAuthenticated } = require("./middlewares/jwt");

const auth = require("./routes/auth");
app.use("/api/auth", auth);

const nodemailer = require("./routes/nodemailer");
app.use("/api/email", nodemailer);

// const newsletter = require("./routes/newsletter");
// app.use("/api/newsletter", newsletter);

const concert = require("./routes/concerts");
app.use("/api", concert);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const galleryRoute = require("./routes/gallery");
app.use("/api", galleryRoute);

const multiMediaRoute = require("./routes/multiMedia");
app.use("/api", multiMediaRoute);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
