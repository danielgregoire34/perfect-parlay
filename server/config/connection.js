const mongoose = require('mongoose');

//mongodb://localhost/social-network-api
//mongodb://127.0.0.1:27017/perfect-parlay
mongoose.connect( 
    process.env.MONGO_URI || 'mongodb://localhost/perfect-parlay',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;