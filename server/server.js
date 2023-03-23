const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema/index');
const { authMiddleware } = require('./utils/auth');
const path = require('path');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}



/*
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false    
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))
});
*/

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen({ port: PORT }, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
            console.log(`API server running on port ${PORT}!`);
            });
        });
        

};



//server.applyMiddleware({ app });



startApolloServer(typeDefs, resolvers);