require("express-async-errors");
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const routes = require("../routes");

const modules = (app) => {
  app.use(express.json());
  app.use(fileUpload());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(express.static(process.cwd() + "/public"));
  app.use(express.static(process.cwd() + "/uploads"));

  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    res.render("index");
  });

  app.use(routes);

  app.use((error, req, res, next) => {
    res.status(500).json({ message: "INTERNAL ERROR", error: error.message });
  });
};

module.exports = modules;
