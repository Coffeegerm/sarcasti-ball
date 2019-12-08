const express = require("express");
const randomReponseGenerator = require("./src/responses");

const app = express();
const port = process.env.PORT || 4000;

app.get("/api/randomResponse", (req, res) =>
  res.send(randomReponseGenerator())
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
