import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import getAccessToken from "../services/getAccessToken";
import { saveTokenToSessionStorage } from "../services/saveToken";

import getLoginUsernames from "../services/getLoginUsernames";

const options = getLoginUsernames();

const LoginListBox = ({ loggedIn }) => {
  const navigate = useNavigate();

  const handleChange = async (username) => {
    const {
      accessToken: token,
      user: { id: userId },
    } = await getAccessToken(username);
    loggedIn(token, userId, username);
    saveTokenToSessionStorage(token);
    navigate("/tweets");
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

export default LoginListBox;
