const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
});

const PORT = process.env.PORT || 5000;
console.log('Server started at http://localhost:' + PORT);
app.listen(PORT);
