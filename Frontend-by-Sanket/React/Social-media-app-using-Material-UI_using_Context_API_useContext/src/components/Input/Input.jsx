import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import PostContext from "../../providers/PostsProvider.js";

function Input() {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { posts, setPosts } = useContext(PostContext);

  async function createPost() {
    setLoading(true);
    await axios
      .post(
        "https://dummyapi.io/data/v1/post/create",
        {
          owner: "60d0fe4f5311236168a109ca",
          text: postText,
          image: imageUrl,
          likes: 0,
          publishDate: new Date(),
        },
        {
          headers: { "app-id": "65b3908f727ec28b26911e81" },
        }
      )
      .then((response) => {
        console.log(response.data);
        setPosts([...posts, response]);
        setLoading(false);
        setPostText("");
        setImageUrl("");
      });
  }

  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Your next post"
        variant="outlined"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="outlined-basic"
        label="Image for your post"
        variant="outlined"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      {!loading ? (
        <Button loading onClick={createPost} variant="contained">
          Submit
        </Button>
      ) : (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      )}
    </Box>
  );
}

export default Input;
