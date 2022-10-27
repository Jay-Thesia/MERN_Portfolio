const mongoose  = require("mongoose");

const eduSchema = new mongoose.Schema({
  eduValue: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Education", eduSchema);
