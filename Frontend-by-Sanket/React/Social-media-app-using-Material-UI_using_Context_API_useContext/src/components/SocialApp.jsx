// import PostCard from "./PostCard";
import MainContainer from "./MainContainer/MainContainer";
import Navbar from "./Navbar/Navbar";
import Input from "./Input/Input";
import PostsContext from "../providers/PostsProvider";

import usePosts from "./hooks/usePosts";

function SocialApp() {
  const [posts, setPosts] = usePosts([]);
  return (
    <div>
      <PostsContext.Provider value={{ posts, setPosts }}>
        <Navbar />
        <Input />
        <MainContainer />
      </PostsContext.Provider>
    </div>
  );
}
export default SocialApp;
