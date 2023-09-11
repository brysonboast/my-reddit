import { useSelector } from "react-redux";
import Subreddit from "./Subreddit";

function SubredditList() {
    const subreddits = useSelector((state) => state.subreddits.subreddits);

    return (
        <div>
            {Object.keys(subreddits).map((key, i) => {return <Subreddit id={key} key={i}/>})}
        </div>
    )
}

export default SubredditList;