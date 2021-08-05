const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/SupplierSystem';

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log('Connected to DB...');
});

app.use(express.json());

const supplierRouter = require('./routes/get-pos');
app.use('/supplier', supplierRouter);

app.listen(9006, () => {
    console.log('Server Started...');
});