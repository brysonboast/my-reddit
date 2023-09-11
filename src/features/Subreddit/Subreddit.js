import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/Subreddit.module.css';
import { fetchPostsBySubreddit } from "../Posts/postSlice";

function Subreddit({id}) {
    const Subreddits = useSelector((state) => state.subreddits.subreddits);
    const data = Subreddits[id]['data'];
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(fetchPostsBySubreddit(e.target.value));
        document.querySelector('.results').innerHTML = data.display_name_prefixed;
    }

    return (
        <div className={styles.Subreddit}>
            <button className={styles.title} onClick={handleClick} value={data.url}>{data.display_name_prefixed}</button>
            <p className={styles.subscribers}>{data.subscribers} subscribers</p>
        </div>
    )
}

export default Subreddit;