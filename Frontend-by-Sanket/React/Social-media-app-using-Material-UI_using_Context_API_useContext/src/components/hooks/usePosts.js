import axios from "axios";
import { useState, useEffect } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // We will download the content from dummyapi.io

    // axios return Promises
    // .then()
    // catch()
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": "65b3908f727ec28b26911e81" },
      })

      .then((response) => {
        const responseObject = response.data;
        setPosts([...responseObject.data]);
        // console.log(response.data);
      });
  }, []);
  return [posts, setPosts];
}
