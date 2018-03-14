const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect('mongodb://jpalan23:Coinci_dence@ds213239.mlab.com:13239/porfoloiopoll')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));