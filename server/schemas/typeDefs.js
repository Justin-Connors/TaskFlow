const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Task {
    _id: ID
    taskName: String
    taskDescription: String
    taskDueDate: String
    taskStatus: [String]
    taskPriority: [String]
    taskAssignedTo: String
    taskCreatedBy: String
    taskCreatedDate: String
    taskUpdatedDate: String
    taskUpdatedBy: String
    taskComments: String
    taskLabels: [String]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    userById(userId: ID): User
    task: Task
    taskById(taskId: ID): Task
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addTask(
      taskName: String!
      taskDescription: String!
      taskDueDate: String
      taskStatus: [String]
      taskPriority: [String]
      taskAssignedTo: String
      taskCreatedBy: String!
      taskCreatedDate: String
      taskUpdatedDate: String
      taskUpdatedBy: String
      taskComments: String
      taskLabels: [String]
    ): Task
    updateUser(firstName: String, lastName: String, email: String): User
    updateTask(
      taskId: ID!
      taskName: String
      taskDescription: String
      taskDueDate: String
      taskStatus: [String]
      taskPriority: [String]
      taskAssignedTo: String
      taskCreatedBy: String
      taskCreatedDate: String
      taskUpdatedDate: String
      taskUpdatedBy: String!
      taskComments: String
      taskLabels: [String]
    ): Task
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
