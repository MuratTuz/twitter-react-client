import { useQuery } from "@apollo/client";
import { GET_ALL_TWEETS } from "../graphQL/query";
import { errorAlert } from "../services/alertServices";
import { getTokenFromSessionStorage } from "../services/tokenServices";
import Tweet from "./Tweet";

const Tweets = () => {
  const { token } = getTokenFromSessionStorage();
  console.log("token", token);
  const { data, loading, error } = useQuery(GET_ALL_TWEETS, {
    variables: { token },
  });
  console.log("data ", data);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    errorAlert(error);
    return <p>Error!</p>;
  }

  return (
    <div className="d-flex flex-column">
      {data &&
        [...data.tweets]
          .reverse()
          .map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
    </div>
  );
};

export default Tweets;
