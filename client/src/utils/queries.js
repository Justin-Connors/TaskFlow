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
