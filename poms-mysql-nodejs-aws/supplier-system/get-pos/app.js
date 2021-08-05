const express = require('express');
const db = require("./models");
// const PORT = process.env.PORT || 8006;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const supplierRouter = require('./routes/supplier');
app.use('/supplier', supplierRouter);

// db.sequelize.sync().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server Started on http://localhost:${PORT}`);
//     });
// });

db.sequelize.sync();

module.exports = app;