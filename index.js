const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
