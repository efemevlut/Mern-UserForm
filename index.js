const express = require("express");
const dbConnect = require("./models/dbConnect");
require("dotenv").config();
const router = require("./routers/router");
const cors = require("cors");


//server
const app = express();
const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`I am listening on port ${port}`)
});

//database connect
dbConnect();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
app.use(express.json());
app.use("/api", router);