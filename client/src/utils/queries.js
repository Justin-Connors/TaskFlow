import { gql } from "@apollo/client";

// User query to get user data
export const QUERY_USER = gql`
  query user {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;

// User query to get user data by ID
export const QUERY_USER_BY_ID = gql`
  query userById($userId: ID!) {
    userById(userId: $userId) {
      _id
      firstName
      lastName
      email
    }
  }
`;

// Task query to get task data
export const QUERY_TASK = gql`
  query task {
    task {
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

// Task query to get task data by ID
export const QUERY_TASK_BY_ID = gql`
  query taskById($taskId: ID!) {
    taskById(taskId: $taskId) {
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
