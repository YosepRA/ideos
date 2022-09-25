require('dotenv').config();

const express = require('express');
const session = require('express-session');
const logger = require('morgan');

const mongoConnect = require('./database/mongo-connect.js');
const passport = require('./passport/index.js');
const indexRouter = require('./routes/index.js');
const ideaRouter = require('./routes/idea.js');
const userRouter = require('./routes/user.js');

const app = express();

const { PORT, MONGO_URL, COOKIE_SECRET } = process.env;

const port = PORT || 3000;
const mongoUrl = MONGO_URL || 'mongodb://localhost:27017/ideos';
let cookieSecret = COOKIE_SECRET;

if (!cookieSecret) {
  console.log(
    'You are currently using unsafe cookie secret. Set a secret as an environment variable.',
  );
  cookieSecret = 'unsafe_cookie_secret';
}

const sessionConfig = {
  secret: cookieSecret,
  saveUninitialized: false,
  resave: false,
};

/* ======================= MongoDB Connection ======================= */

mongoConnect(mongoUrl);

/* ======================= Middlewares ======================= */

app.use(logger('dev'));
app.use(express.json());
app.use(session(sessionConfig));

/* ======================= Passport ======================= */

app.use(passport.initialize());
app.use(passport.session());

/* ======================= Routes ======================= */

app.use('/api', indexRouter);
app.use('/api/idea', ideaRouter);
app.use('/api/user', userRouter);

/* ======================= Listen ======================= */

app.listen(port, () => {
  console.log(`Server is listening on port ${port} ...`);
});
