const mongoose = require("mongoose");

const url = "mongodb+srv://jchz2:Hulk40@decimagen.fqnvq.mongodb.net/test";

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connect,
};
