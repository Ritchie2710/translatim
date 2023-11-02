const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");

app.get("/", (_, response) => response.json("root route for trnalatim."));

// add your endpoints here

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
