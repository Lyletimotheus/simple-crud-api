const mongoose = require("mongoose");
const express = require("express");
const productRoute = require("./routes/product.route.js");

const app = express();
const port = 9000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://lyle6494:DdMlfFbUWirr7KAy@backenddb.lyo7b.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Error connecting");
  });
