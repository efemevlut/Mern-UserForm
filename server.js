const express = require("express");
const dbConnect = require("./models/dbConnect");
require("dotenv").config();
const router = require("./routers/router");


//server
const app = express();
const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`I am listening on port ${port}`)
});

//database connect
dbConnect();

app.use(express.json());
app.use("/api", router);