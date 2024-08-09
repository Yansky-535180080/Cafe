const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/caffe-cafe';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASSWORD,
});
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using mongoose.");
});

module.exports = db;