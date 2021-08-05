const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/PurchaseSystem';

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log('Connected to DB...');
});

app.use(express.json());

const purchaseOrderRouter = require('./routes/get-pos');
app.use('/purchase-order', purchaseOrderRouter);

app.listen(9002, () => {
    console.log('Server Started...');
});