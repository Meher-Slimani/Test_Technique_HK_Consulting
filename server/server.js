const express = require("express");
const connectDB = require("./config/db");
const config = require("config");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/donation", require("./routes/donation.js"));

const PORT = process.env.PORT || config.get("PORT");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
