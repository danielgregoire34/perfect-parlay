const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');
const path = require('path');
const db = require('./config/connection');


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false    
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => app.listen({ port: 4000 }, resolve));
};

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}



server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;

db.once('open', () => {
app.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`API server running on port ${PORT}!`);
    });
});

startApolloServer(typeDefs, resolvers);