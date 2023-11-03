const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");

app.get("/translate", async (request, response) => {
  // destructure all the properties from request.query into variables
  const { word, from, to } = request.query;

  // make our API call
  const API_mymemory = `https://api.mymemory.translated.net/get?q=${word}&langpair=${from}|${to}`;
  const res_mymemory = await axios.get(API_mymemory);

  const API_unsplash = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${res_mymemory.data.responseData.translatedText}`;

  const res_unsplash = await axios.get(API_unsplash);

  const wrangledData = {
    translation: res_mymemory.data.responseData.translatedText,
    match: res_mymemory.data.responseData.match,
    translation: res_mymemory.data.responseData.translatedText,
    match: res_mymemory.data.responseData.match,
    image: res_unsplash.data.results[0].urls.regular,
  };

  response.json(wrangledData);
});
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
