const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require("./models/Employee")

const app = express()

app.use(express.json())
app.use(cors({
  origin: "*"
}))

mongoose.connect("mongodb://127.0.0.1:27017/ali")

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then(employeess => {
      res.json(employeess)
    })
    .catch(err => console.log(err))
})



app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email, password })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("the password incorections")
        }
      } else {
        res.json("No record existed ")
      }
    })
})

app.listen(3001, () => {
  console.log("listen started on port 3001")

})
