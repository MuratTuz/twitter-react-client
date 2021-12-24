import gql from "graphql-tag";

export const GET_ALL_TWEETS = gql`
  query getTweets {
    tweets: getTweets {
      username
      title
      text
      createdAt
    }
  }
`;

export const GET_USER_TWEETS = gql`
  query getUserTweets($email: String!) {
    tweets: getUserTweets(email: $email) {
      title
      text
      createdAt
    }
  }
`;

export const GET_TOKEN = gql`
  query getToken($email: String!) {
    tokenData: getToken(email: $email) {
      token
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    users: getUsers {
      email
    }
  }
`;
