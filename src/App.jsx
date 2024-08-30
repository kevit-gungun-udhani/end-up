import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [post, setPost] = useState([])

  function addPost(post){
    setPost((prevPost) => [...prevPost, post])
  }

  function toggleModalHandler(){
    setIsModalVisible(!isModalVisible)
  }
  return (
    <main>
      <MainHeader onCreatePost={toggleModalHandler}/>
      <PostList isModalVisible={isModalVisible} onClickHandler={toggleModalHandler} postList={post} addPost={addPost}/>
    </main>
  )
}

export default App;
