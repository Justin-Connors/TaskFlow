const { AuthenticationError } = require("apollo-server-express");
const { User, Task } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    userById: async (parent, args, context) => {
      const user = await User.findById(args.userId).select("-email");
      return user;
    },
    task: async (parent, args) => {
      const task = await Task.find({
        taskCreatedBy: args.taskCreatedBy,
      });
      return task;
    },
    taskById: async (parent, args) => {
      const task = await Task.findById(args.taskId);
      return task;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
    addTask: async (parent, args, context) => {
      if (context.user) {
        const task = await Task.create(args);
        return task;
      }
      throw new AuthenticationError("Not logged in");
    },
    updateTask: async (parent, args, context) => {
      if (context.user) {
        const task = await Task.findByIdAndUpdate(args.taskId, args, {
          new: true,
        });
        return task;
      }
      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
