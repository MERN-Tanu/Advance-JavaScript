// import Avatar from "@mui/material/Avatar";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useUserProfile from "../hooks/useUserProfile";

export default function UserDetails() {
  //   let { userid } = useParams();
  //   const [user, setUser] = useState({});
  //   const [loading, setLoading] = useState(true);
  const [user, loading] = useUserProfile();
  //   console.log("userid", userid);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Card sx={{ display: "flex", mt: "2rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {user.firstname + "" + user.lastname}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div">
              {user.email}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={user.picture}
          alt="Live from space album cover"
        />
      </Card>
    );
  }
}
