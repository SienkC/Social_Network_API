const { connect, connection } = require('mongoose');

// connect using atlas or localhost
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

module.exports = connection;
