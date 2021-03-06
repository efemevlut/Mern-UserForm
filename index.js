const express = require("express");
const dbConnect = require("./models/dbConnect");
require("dotenv").config();
const router = require("./routers/router");
const cors = require("cors");
const path = require("path");

//server
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});

//database connect
dbConnect();

// production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
//   app.use("/api", router)
// }

app.use(
  cors()
);

app.use('/', express.static(path.join(__dirname+'/node_modules')));

app.use(express.json());
app.use("/api", router);
