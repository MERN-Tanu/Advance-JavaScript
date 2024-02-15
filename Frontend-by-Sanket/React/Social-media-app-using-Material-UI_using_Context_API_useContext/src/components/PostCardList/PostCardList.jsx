import { useContext } from "react";
import PostCard from "../PostCard";
// import axios from "axios";
import PostsContext from "../../providers/PostsProvider";

// let array = [];

function PostCardList() {
  // const [posts, setPosts] = useState([]);
  const { posts } = useContext(PostsContext);

  // useEffect(() => {
  //   // We will download the content from dummyapi.io
  //   // axios return Promises
  //   // .then()
  //   // catch()
  // }, [posts]);

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
