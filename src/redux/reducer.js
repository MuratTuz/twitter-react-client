import {
  LOGGED_IN,
  POSTED_TWEET,
  FETCHED_TWEETS,
  FAILED_TWEETS,
} from "./actionTypes";

export const initialState = {
  username: null,
  token: null,
  userId: null,
  tweets: null,
  lastTweet: null,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      const { token, userId, username } = action.payload;
      return {
        ...state,
        token,
        userId,
        username,
      };

    case POSTED_TWEET:
      const lastTweet = action.payload;
      return {
        ...state,
        lastTweet,
      };

    case FAILED_TWEETS:
      const error = action.payload;
      return {
        ...state,
        error,
      };

    case FETCHED_TWEETS:
      const tweets = action.payload;
      return {
        ...state,
        tweets,
      };

    default:
      return state;
  }
};
