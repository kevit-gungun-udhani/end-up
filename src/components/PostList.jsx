import Post from "./Post";
import styles from './PostList.module.css';
import NewPost from "./NewPost";
import Modal from "./Modal";                                                    

function PostList({isModalVisible, onClickHandler, postList, addPost}){
    return (
        <>
            {isModalVisible && <Modal onClick={onClickHandler}>
                {/* where to put this newpost inside modal, is something we will have to specify */}
                <NewPost onCancel={onClickHandler} addPost={addPost}/>
            </Modal>}
            <ul className={styles.posts}>
                {postList?.map(({body, name}) => <Post body={body} author={name} key={name}/>)}
                <Post body="Go optimistic"/>
            </ul>
        </>
    );
}
export default PostList;