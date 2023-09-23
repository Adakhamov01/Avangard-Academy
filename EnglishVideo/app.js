const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const path = require('path')
const app = express();

app.use(cors())

const mediaRoutes = require("./routes/media")

const mongodbUrl = "mongodb://127.0.0.1:27017/uploute"

app.use("/api/vl/media", mediaRoutes)
app.use("/public", express.static(path.join(__dirname, 'public')))


mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
})


mongoose.connection.on("connected", () => {
  console.log("Server Connected");
})

mongoose.connection.on("error", (err) => {
  console.log("Server Error", err);
})


app.listen(4000, () => {
  console.log("Server Starded on port 4000");

});