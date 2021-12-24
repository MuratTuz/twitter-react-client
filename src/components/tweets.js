import { useQuery } from "@apollo/client";
import { GET_ALL_TWEETS, GET_USER_TWEETS } from "../graphQL/query";
import { errorAlert } from "../services/alertServices";
import { connect } from "react-redux";
import Tweet from "./Tweet";

const Tweets = ({ username }) => {
  const { data, loading, error } = useQuery(GET_ALL_TWEETS);
  console.log("data ", data);
  console.log("username ", username);

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
        data.tweets &&
        [...data.tweets]
          .reverse()
          .map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({ username: state.username });

export default connect(mapStateToProps)(Tweets);
