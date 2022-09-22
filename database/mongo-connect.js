const mongoose = require('mongoose');

function mongoConnect(mongoUrl) {
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  mongoose.connect(mongoUrl, connectionOptions);

  const dbConnection = mongoose.connection;

  dbConnection.on('error', (err) => {
    console.error('Database connection error:', err.message);
  });
  dbConnection.once('open', () => {
    console.log('Successfully connected to database...');
  });
  dbConnection.once('close', () => {
    console.log('Database disconnected.');
  });

  return dbConnection;
}

module.exports = mongoConnect;
