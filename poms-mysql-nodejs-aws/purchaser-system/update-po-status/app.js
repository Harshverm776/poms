const express = require('express');
const db = require("./models");
// const PORT = process.env.PORT || 8003;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const purchaseOrderRouter = require('./routes/purchase-order');
app.use('/purchase-order', purchaseOrderRouter);

// db.sequelize.sync().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server Started on http://localhost:${PORT}`);
//     });
// });

db.sequelize.sync();

module.exports = app;