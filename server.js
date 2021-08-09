const { createServer } = require("http");
const express = require("express");
const data_env = require("./config");

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  res.send("Lukas Petricek is the best.");
});

server.listen(data_env.PORT, () => {
  console.log("Server is active on PORT " + data_env.PORT);
});
