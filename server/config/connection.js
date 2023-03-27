const mongoose = require('mongoose');

<<<<<<< HEAD
//mongodb://localhost/perfect-parlay
//mongodb://127.0.0.1:27017/perfect-parlay
=======
>>>>>>> c4f72e7b81c7a48de54cca2b3a6d75e7098d9df7
mongoose.connect( 
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/perfect-parlay',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;