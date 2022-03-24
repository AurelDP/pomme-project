const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const buyhistoryRoutes = require("./routes/buyhistoryRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/products", productsRoutes)
app.use("/users", usersRoutes)
app.use("/buyhistory", buyhistoryRoutes)

app.listen(8081);