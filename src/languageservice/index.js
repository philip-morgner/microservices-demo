const express = require("express");

const config = require("./config.json");

const { translate, getSupportedLanguages } = require("./resolvers");

const app = express();

const PORT = process.env.PORT || config.service.port;
const SERVICE_NAME = process.env.SERVICE_NAME || config.service.name;

app.use(express.json());

// easter egg for the tutors
app.get("/", (req, res) => {
  res.send("Merry Christmas!");
});

app.get("/getSupportedLanguages", (req, res) =>
  getSupportedLanguages(req, res)
);

app.post("/translate", (req, res) => translate(req, res));

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} listening on port ${PORT}`);
});
