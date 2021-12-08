import gql from "graphql-tag";

export const GET_ALL_TWEETS = gql`
  query allTweets($token: String!) {
    tweets: getTweets(token: $token) {
      username
      title
      text
      createdAt
    }
  }
`;

export const GET_TOKEN = gql`
  query token($email: String!) {
    tokenData: getToken(email: $email) {
      token
      email
      _id
    }
  }
`;

export const GET_USERS = gql`
  query {
    users: getUsers {
      email
    }
  }
`;
