import { connect } from "react-redux";
import LoginListBox from "../components/LoginListBox";
import { loggedIn } from "../redux/actions";

const mapDispatchToProps = {
  loggedIn,
};

export const LoginListBoxContainer = connect(
  null,
  mapDispatchToProps
)(LoginListBox);
