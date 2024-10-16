import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, removePost, setPage } from './features/postsSlice.js';
import Card from './components/Card.jsx';
import Pagination from './components/Pagination.jsx';
import { Link } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const { posts, loading, currentPage, itemsPerPage } = useSelector(state => state.posts);
  const [toggleView, setToggleView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts());
    }, 5000);
  }, [dispatch]);

  // Calculate the current page posts
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return <div className="text-center h-[100vh] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
     <div className='flex justify-between gap-2 items-center'>
     <button className='mb-3 text-2xl text-blue-600' onClick={() => setToggleView(!toggleView)}>
     Posts
   </button>
     <button className='mb-3 text-2xl text-white px-4 py-2 rounded shadow bg-blue-600'>
      <Link to="/feedback">Feedback</Link>
   </button>


     </div>

      <div className={`grid grid-cols-3 gap-4 ${toggleView ? 'view-alternate' : 'view-default'}`}>
        {currentPosts.map(post => (
          <Card key={post.id} post={post} onRemove={() => dispatch(removePost(post.id))} />
        ))}
      </div>

      <Pagination totalPosts={posts.length} />
    </div>
  );
};

export default App;
