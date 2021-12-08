import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import { connect } from "react-redux";

import TweetForm from "./TweetForm";

const logoImg = "./tweetLogo.png";

const Header = ({ username }) => {
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
          {username !== null ? (
            <>
              <TweetForm />
              <Stack>{username}</Stack>
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

const mapStateToProps = (state) => ({ username: state.email });

export default connect(mapStateToProps)(Header);
