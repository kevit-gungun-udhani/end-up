import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function toggleModalHandler(){
    setIsModalVisible(!isModalVisible)
  }
  return (
    <main>
      <MainHeader onCreatePost={toggleModalHandler}/>
      <PostList isModalVisible={isModalVisible} onClickHandler={toggleModalHandler}/>
    </main>
  )
}

export default App;
