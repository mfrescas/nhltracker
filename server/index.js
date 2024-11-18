const express = require('express');
const app = express();
const db = require('./models');


// Routers 
const postRouter = require ('./routes/test');
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});