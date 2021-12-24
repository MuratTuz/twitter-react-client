import {
  LOGGED_IN,
  POSTED_TWEET,
  FETCHED_TWEETS,
  FAILED_TWEETS,
} from "./actionTypes";

import produce from "immer";

const initialState = {
  email: null,
  username: null,
  tweets: null,
  lastTweet: null,
  error: null,
};

export const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      const username = action.payload;
      state.username = username;
      break;

    case POSTED_TWEET:
      const lastTweet = action.payload;
      state.lastTweet = lastTweet;
      break;

    case FAILED_TWEETS:
      const error = action.payload;
      state.error = error;
      break;

    case FETCHED_TWEETS:
      const tweets = action.payload;
      state.tweets = tweets;
      break;

    default:
      return state;
  }
}, initialState);
