import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Tweet = ({ tweet }) => {
  const tweetDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(tweet.createdAt);
  return (
    <Card sx={{ maxWidth: "50vw" }} className="m-3 bg-info">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tweet.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {tweet.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className="d-flex justify-content-between">
              <span>
                <i>
                  <b>creator :{"  "}</b>
                  {tweet.creator}
                </i>
              </span>
              <span>
                <i>
                  <b>Date :{"  "}</b>
                  {tweetDate}
                </i>
              </span>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Tweet;
