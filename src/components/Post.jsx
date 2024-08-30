import { useNoDuplicate } from "../hook-store/NoDuplicates";
import styles from './Post.module.css'
function Post({body, author}){ 
    return(
        <li className={styles.post}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{body}</p>
        </li>
    )
}
export default Post;