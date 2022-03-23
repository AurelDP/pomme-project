const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/products", productsRoutes)
app.use("/users", usersRoutes)

app.listen(8081);