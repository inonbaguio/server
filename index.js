const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require("passport");
const cookieSession = require('cookie-session');

require('./models/User');
require('./services/passport');

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 100,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
});

const PORT = process.env.PORT || 5000;
console.log('Server started at http://localhost:' + PORT);
app.listen(PORT);
