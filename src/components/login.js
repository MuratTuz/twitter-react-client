import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { LoginListBoxContainer } from "../containers/LoginListBoxContainer";
const img_src = process.env.PUBLIC_URL + "twitter-pic.jpeg";

const Login = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={img_src}
        alt="Your Twitter"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Please Login
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <LoginListBoxContainer />
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default Login;
