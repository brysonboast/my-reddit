import { useSelector } from "react-redux";
import Post from './Post';
import styles from '../../styles/PostList.module.css';
import { useDispatch } from "react-redux";

function PostList() {
    const posts = useSelector((state) => state.posts.data);
    return (
        <div>
            {Object.keys(posts).map((key, i) => <Post id={key} key={i} />)}
        </div>
    )
}

export default PostList;