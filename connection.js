const mongoose = require('mongoose');

// Set Mongoose strictQuery setting
mongoose.set('strictQuery', false); // or true, depending on your preference

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
