import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import { connect } from "react-redux";
import { useMutation } from "@apollo/client";

const TweetForm = ({ token }) => {
  const [open, setOpen] = useState(false);
  const [tweetText, setTweetText] = useState("");
  const [tweetTitle, setTweetTitle] = useState("");
  const [postedTweet, newTweet] = useMutation();

  const handleClickOpen = () => {
    setOpen(true);
    setTweetText("");
    setTweetTitle("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postTweet = () => {
    const newTweet = { title: tweetTitle, text: tweetText };
    //postedTweet(newTweet);

    handleClose();
  };

  return (
    <form>
      <Stack direction="row" spacing={5}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          size="large"
          onClick={handleClickOpen}
        >
          POST TWEET
        </Button>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>POST A TWEET</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tweet Title"
            type="email"
            fullWidth
            variant="standard"
            value={tweetTitle}
            onChange={(e) => setTweetTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tweet Text"
            type="email"
            fullWidth
            variant="standard"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={postTweet}>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(TweetForm);
