import { useDispatch, useSelector } from "react-redux";
import { updateTerm, resetTerm } from './searchSlice';
import styles from '../../styles/SearchBar.module.css';
import { fetchPostsByTerm } from "../Posts/postSlice";
import SubredditList from "../Subreddit/SubredditList";

function SearchBar() {
    const term = useSelector((state) => state.searchTerm);
    const dispatch = useDispatch();

    const setResultsP = () => {
        document.querySelector('.results').innerHTML = 'Showing results for: ' + term;
    }

    const handleClick = (e) => {
        dispatch(fetchPostsByTerm(term));
        setResultsP();
        dispatch(resetTerm());
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(fetchPostsByTerm(term));
            setResultsP();
            dispatch(resetTerm());
        }
    }

    return (
        <div className={styles.searchbar}>
            <div className={styles.search}>
                <input type="text" value={term} onKeyDown={handleKeyDown} onChange={(e) => dispatch(updateTerm(e.target.value))}/>
                <div className={styles.btnDiv} onClick={handleClick}>
                    <button className={styles.searchBtn}></button>
                </div>
            </div>
            <div>
                <h3 className='results'></h3>
            </div>
        </div>
    )
}

export default SearchBar;