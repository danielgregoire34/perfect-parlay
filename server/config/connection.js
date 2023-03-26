const mongoose = require('mongoose');

//mongodb://localhost/social-network-api
mongoose.connect( 
    process.env.MONGO_URI || 'mongodb://localhost/social-network-api',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;