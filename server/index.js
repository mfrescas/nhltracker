const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./models');

app.use(express.json());
app.use(cors());

// Routers 
const teamsRouter = require ('./routes/teams');
app.use("/teams", teamsRouter);
const assetsRouter = require("./routes/assets");
app.use("/assets", assetsRouter);
const coachesRouter = require("./routes/coaches");
app.use("/coaches", coachesRouter);
const contractsRouter = require("./routes/contracts");
app.use("/contracts", contractsRouter);
const locationsRouter = require("./routes/locations");
app.use("/locations", locationsRouter);
const playersRouter = require("./routes/players");
app.use("/players", playersRouter);
const transactionsRouter = require("./routes/transactions");
app.use("/transactions", transactionsRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});