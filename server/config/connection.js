const mongoose = require('mongoose');

//mongodb://localhost/perfect-parlay
//mongodb://127.0.0.1:27017/perfect-parlay
mongoose.connect( 
    process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/perfect-parlay',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;