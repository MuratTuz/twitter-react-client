
import {
  LOGGED_IN,
  POSTED_TWEET,
  FETCHED_TWEETS,
  FAILED_TWEETS,
} from "./actionTypes";

import { getAllTweetsService } from "../services/tweetServices";

export const loggedIn = (token, userId, username) => ({
  type: LOGGED_IN,
  payload: { token, userId, username },
});

export const postedTweet = (postedTweet) => ({
  type: POSTED_TWEET,
  payload: postedTweet,
});

export const fetchedTweets = (tweets) => ({
  type: FETCHED_TWEETS,
  payload: tweets,
});

export const failedTweets = (error) => ({
  type: FAILED_TWEETS,
  payload: error,
});

export const getTweets = (token) => {
  return async (dispatch) => {
    try {
      const response = await getAllTweetsService(token);
      const data = await response.json();
      dispatch(fetchedTweets(data));
    } catch (error) {
      dispatch(failedTweets(error));
    }
  };
};
