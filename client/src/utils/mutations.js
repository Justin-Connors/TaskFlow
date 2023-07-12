import { gql } from "@apollo/client";

// Mutation for Logging in a user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// Mutation to add a user
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// Mutation to add a task
export const ADD_TASK = gql`
  mutation addTask(
    $taskName: String!
    $taskDescription: String!
    $taskDueDate: String
    $taskStatus: [String]
    $taskPriority: [String]
    $taskAssignedTo: String
    $taskCreatedBy: String!
    $taskCreatedDate: String!
    $taskUpdatedDate: String
    $taskUpdatedBy: String
    $taskComments: String
    $taskLabels: [String]
  ) {
    addTask(
      taskName: $taskName
      taskDescription: $taskDescription
      taskDueDate: $taskDueDate
      taskStatus: $taskStatus
      taskPriority: $taskPriority
      taskAssignedTo: $taskAssignedTo
      taskCreatedBy: $taskCreatedBy
      taskCreatedDate: $taskCreatedDate
      taskUpdatedDate: $taskUpdatedDate
      taskUpdatedBy: $taskUpdatedBy
      taskComments: $taskComments
      taskLabels: $taskLabels
    ) {
      _id
      taskName
      taskDescription
      taskDueDate
      taskStatus
      taskPriority
      taskAssignedTo
      taskCreatedBy
      taskCreatedDate
      taskUpdatedDate
      taskUpdatedBy
      taskComments
      taskLabels
    }
  }
`;
