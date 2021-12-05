import { connect } from "react-redux";
import RequireLogin from "../auth/requireLogin";

const mapStateToProps = (state) => ({ token: state.token });

export const RequireLoginContainer = connect(mapStateToProps)(RequireLogin);
