import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../features/postsSlice';

const Pagination = ({ totalPosts }) => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector(state => state.posts);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination mt-5 flex items-center justify-between">
      <button onClick={() => dispatch(setPage(currentPage - 1))} disabled={currentPage === 1}>
        Prev
      </button>
      {pageNumbers.map(number => (
        <button className={` p-2 ${currentPage === number ? 'bg-gray-500 text-white' : ''}`} key={number} onClick={() => dispatch(setPage(number))}>
          {number}
        </button>
      ))}
      <button onClick={() => dispatch(setPage(currentPage + 1))} disabled={currentPage === pageNumbers.length}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
