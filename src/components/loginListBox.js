import { useNavigate } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { saveTokenToSessionStorage } from "../services/tokenServices";
import { errorAlert } from "../services/alertServices";
import { GET_TOKEN, GET_USERS } from "../graphQL/query";

import { connect } from "react-redux";
import { loggedIn } from "../redux/actions";

const LoginListBox = ({ loggedIn }) => {
  const navigate = useNavigate();
  const { data } = useQuery(GET_USERS);
  var options =
    data && "users" in data
      ? data.users.map((user) => user.email)
      : ["Loading..."];

  const [getTokenFromRemoteServer, { data: tokenData, loading, error }] =
    useLazyQuery(
      GET_TOKEN
      /*     {
      onCompleted: (data) => setTokenData({ tokenData }),
    } */
    );

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    errorAlert(error);
    return <p>Error!</p>;
  }
  if (tokenData) {
    const {
      tokenData: { token },
    } = tokenData;

    saveTokenToSessionStorage(token);
    navigate("/tweets");
  }

  const handleChange = async (email) => {
    loggedIn(email);
    getTokenFromRemoteServer({ variables: { email } });
  };

  return (
    <Autocomplete
      onChange={(event, email) => {
        event.preventDefault();
        handleChange(email);
      }}
      id="uncontrollable-list-box"
      options={options}
      sx={{ width: 300 }}
      disableClearable={true}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="User Emails" />
      )}
    />
  );
};

const mapDispatchToProps = {
  loggedIn,
};

export default connect(null, mapDispatchToProps)(LoginListBox);
