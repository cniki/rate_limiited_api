const mongoose = require("mongoose");

const requestLogSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  payload: { type: Object },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RequestLog", requestLogSchema);