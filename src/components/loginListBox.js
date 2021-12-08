import { useNavigate } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { saveTokenToSessionStorage } from "../services/tokenServices";
import { errorAlert } from "../services/alertServices";
import { GET_TOKEN, GET_USERS } from "../graphQL/query";

import { connect } from "react-redux";
import { loggedIn } from "../redux/actions";

const LoginListBox = () => {
  const navigate = useNavigate();

  const { data } = useQuery(GET_USERS);
  console.log("data  ", data);
  var options =
    data && "users" in data
      ? data.users.map((user) => user.email)
      : ["Loading..."];

  const [getToken, { data: tokenData, loading, error }] = useLazyQuery(
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
  if (tokenData !== undefined) {
    const {
      tokenData: { token, email, _id },
    } = tokenData;
    loggedIn(token, email, _id);
    saveTokenToSessionStorage(token, email, _id);
    navigate("/tweets");
    console.log("token ", token);
  }
  const handleChange = async (email) => {
    console.log("email ", email);
    getToken({ variables: { email } });
  };

  return (
    <Autocomplete
      onChange={(_event, newValue) => {
        handleChange(newValue);
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
