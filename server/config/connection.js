const mongoose = require('mongoose');

mongoose.connect( 
    process.env.MONGO_URI || 'mongodb://localhost/social-network-api',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
);

module.exports = mongoose.connection;