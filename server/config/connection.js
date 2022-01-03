// import connection handling for MongoDB
const mongoose = require("mongoose");

// Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tomodachi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;