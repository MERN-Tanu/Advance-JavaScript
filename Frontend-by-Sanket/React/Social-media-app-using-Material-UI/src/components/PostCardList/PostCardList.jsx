import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";

// let array = [];

function PostCardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // We will download the content from dummyapi.io

    // axios return Promises
    // .then()
    // catch()
    async function f() {
      const response = await axios.get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": "65b3908f727ec28b26911e81" },
      });

      const responseObject = response.data;
      setPosts([...responseObject.data]);
      console.log(response.data.data);
    }
    f();
  }, []);

  return posts.length == 0
    ? "loading..."
    : posts.map((post) => (
        <PostCard
          content={post.text}
          image={post.image}
          authorFirstName={post.owner.firstName}
          key={post.id}
        />
      ));
}

export default PostCardList;
