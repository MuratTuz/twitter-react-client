import { useEffect } from "react";
import { errorAlert } from "../services/alertServices";
import Tweet from "./Tweet";

const Tweets = ({ tweets, token, error, lastTweet, getTweets }) => {
  useEffect(() => {
    getTweets(token);
    if (error) {
      errorAlert(error);
    }
    // eslint-disable-next-line
  }, [lastTweet, error]);

  return (
    <div className="d-flex flex-column">
      {tweets &&
        tweets.reverse().map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
    </div>
  );
};

export default Tweets;
