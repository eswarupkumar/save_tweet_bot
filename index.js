const express = require("express");
const app = express();

const routes = require("./main");

app.use("/", routes);

app.listen(5000, () => {
  console.log("App listening to port 5000");
});
