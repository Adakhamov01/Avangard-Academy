const mongoose = require('mongoose');


const EmployeeSchma = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchma)
module.exports = EmployeeModel