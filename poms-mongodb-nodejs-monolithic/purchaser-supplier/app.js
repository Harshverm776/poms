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

const purchaseOrderRouter = require('./routes/purchase-order');
app.use('/purchase-order', purchaseOrderRouter);

const itemRouter = require('./routes/item');
app.use('/item', itemRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const supplierRouter = require('./routes/supplier');
app.use('/supplier', supplierRouter);

app.listen(9000, () => {
    console.log('Server Started...');
});