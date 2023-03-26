const mongoose = require('mongoose');

//mongodb://localhost/social-network-api
mongoose.connect( 
    process.env.MONGO_URI || 'mongodb://127.0.0.1/social-network-api',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;