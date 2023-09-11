import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/Post.module.css';
import { useEffect } from "react";
import { getCommentsByPost } from "./postSlice";

function Post({id}) {
    const posts = useSelector((state) => state.posts.data);
    const data = posts[id];
    const base = 'https://reddit.com';
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCommentsByPost(data));
    }, [])

    return (
        <div className={styles.post}>
            <div className={styles.like}>
                <div className={styles.upArrow}>
                    <button></button>
                </div>
                <p className={styles.upVotes}>{data.ups}</p>
                <div className={styles.downArrow}>
                    <button></button>
                </div>
            </div>
            <div className={styles.info}>
                <h3>{data.title}</h3>
                {data.preview && <img src='' />}
                <div className={styles.extra}>
                    <a className={styles.link} href={base +'/r/'+data.subreddit}>r/{data.subreddit}</a>
                    <div className={styles.comments}>
                        <button>{data.num_comments} comments</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;