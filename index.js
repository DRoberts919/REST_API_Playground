// entry point for api
const express = require("express");
const routes = require("./Routes/routes");
const jsonWebToken = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 3000;

// body parser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// JWT setup

routes.routes(app);

app.listen(PORT, () => {
  console.log("node server is running on port 3000");
});
