import { connect } from "react-redux";
import Header from "../components/header";

const mapStateToProps = (state) => ({ username: state.username });

export const HeaderContainer = connect(mapStateToProps)(Header);
