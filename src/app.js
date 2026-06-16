const express = require("express");

const userRoutes = require("./router/user.route");
const productRoutes = require("./router/product.route");

const app=express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

module.exports = app;