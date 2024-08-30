import Post from "./Post";
import styles from './PostList.module.css';
import NewPost from "./NewPost";
import { useState } from "react";
import { useNoDuplicate } from "../hook-store/NoDuplicates";
import Modal from "./Modal";                                                    

function PostList(){
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState(useNoDuplicate);
    const [isModalVisible, setIsModalVisible] = useState(true);

    function onBodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function onInputChangeHandler(event){
        setEnteredName(event.target.value)
    }

    function onClickHandler(){
        setIsModalVisible(false)
    }
    
    return (
        <>
            {isModalVisible && <Modal onClick={onClickHandler}>
                {/* where to put this newpost inside modal, is something we will have to specify */}
                <NewPost onBodyChange={onBodyChangeHandler} onInputChange={onInputChangeHandler}/>
            </Modal>}
            <ul className={styles.posts}>
                <Post body={enteredBody} author={enteredName}/>
                <Post body="Go optimistic"/>
            </ul>
        </>
    );
}
export default PostList;