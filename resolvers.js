const User = require('./models/User');
const jwt = require('jsonwebtoken');

const resolvers = {
    Query: {
        user: async (parent, { _id }) => {
            return await User.findById(id);
        },
        users: async () => {
            return await User.find({});
        }
    },
    Mutation: {
        createUser: async (parent, { email, password }) => {
            const user = User({ email, password });
            await user.save();
            return user;
        },
        updateUser: async (parent, { _id, email, password }) => {
            const user = await User.findByIdAndUpdate(id, { email, password }, { new: true });
            return user;
    },
    deleteUser: async (parent, { id }) => {
        const user = await User.findByIdAndDelete(id);
        return user;
    }
    }
};
