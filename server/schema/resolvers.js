const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { signToken } = require('../utils/auth');

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
        addUser: async (parent, { username, email, password }) => {
            const user = User({ username, email, password });
            await user.save();
            const token = signToken(user);
            return {user, token};
        },
        updateUser: async (parent, { _id, email, password }) => {
            const user = await User.findByIdAndUpdate(id, { email, password }, { new: true });
            return user;
        },
        deleteUser: async (parent, { id }) => {
            const user = await User.findByIdAndDelete(id);
            return user;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
              throw new Error('Incorrect email or password');
            }

            if (password !== user.password) {
              throw new Error('Incorrect email or password');
            }

            const token = signToken(user);
            return { user, token };
          },
    },
};

module.exports = resolvers;