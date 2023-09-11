import logo from './logo.svg';
import './App.css';
import PostList from './features/Posts/PostList';
import SearchBar from './features/SearchBar/SearchBar';
import SubredditList from './features/Subreddit/SubredditList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSubreddits } from './features/Subreddit/subredditSlice';
import { fetchPostsBySubreddit } from './features/Posts/postSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubreddits());
    dispatch(fetchPostsBySubreddit('/r/Popular'));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>MyReddit</h1>
      </header>
      <div className="body">
        <SearchBar />
        <div className="info">
          <div className='subredditList'>
            <h3>Popular Subreddits</h3>
            <SubredditList />
          </div>
          <div className='postList'>
            <PostList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
