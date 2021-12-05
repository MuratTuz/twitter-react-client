import { connect } from "react-redux";
import TweetForm from "../components/TweetForm";
import { postedTweet } from "../redux/actions";

const mapStateToProps = (state) => ({
  userId: state.userId,
  token: state.token,
});

const mapDispatchToProps = {
  postedTweet,
};

export const TweetFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetForm);
