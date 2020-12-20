const express = require("express");
require("dotenv").config();


//server
const app = express();
const port = process.env.port || 5000;

app.listen(port, ()=>{
    console.log(`I am listening on port ${port}`)
});

app.use(express.json());
// app.use("/api", router);