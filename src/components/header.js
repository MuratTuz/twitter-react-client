import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import { TweetFormContainer } from "../containers/TweetFormContainer";

const logoImg = "./tweetLogo.png";

const Header = (state) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="d-flex justify-content-between">
          <Typography variant="h6" component="div">
            <div className="d-flex justify-content-between">
              <Avatar alt="Remy Sharp" src={logoImg} />
              <span>&nbsp; Twitter Application</span>
            </div>
          </Typography>
          {state.username !== null ? (
            <>
              <TweetFormContainer />
              <Stack>{state.username}</Stack>
            </>
          ) : (
            <>
              <span></span>
              <Stack>Not Logged In</Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
