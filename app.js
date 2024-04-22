const express = require("express");
const invoiceRoutes = require("./routes/invoiceRoutes");
const clientRoutes = require("./routes/clientRoutes");
require('dotenv').config();

const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.use("/api", invoiceRoutes);
app.use("/api", clientRoutes);

module.exports = app;