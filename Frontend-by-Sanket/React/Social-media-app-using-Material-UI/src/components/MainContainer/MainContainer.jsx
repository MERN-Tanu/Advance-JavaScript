// import * as React from "react";
// import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PostCardList from "../PostCardList/PostCardList";
// import PostCard from "../PostCard";
import UserList from "../UserList/UserList";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function RowAndColumnSpacing() {
  return (
    <Box
      container
      display={"flex"}
      bgcolor={"deepskyblue"}
      flexWrap={"wrap"}
      sx={{ width: "100%", mt: "3rem" }}>
      <Grid
        container
        alignItems={"start"}
        justifyContent={"center"}
        rowSpacing={1}
        mt={"15px"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid>
          {/* Users */}

          <UserList />
        </Grid>
        <Grid
          gap={"1em"}
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          item
          md={8}>
          {/* Posts */}

          <PostCardList />
        </Grid>
        {/* <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
