import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/productsSlice';

const PaginationLoader = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();

  const handlePrevious = () => {
    if (currentPage > 1) dispatch(setPage(currentPage - 1));
  };

  const handleNext = () => {
    if (currentPage < totalPages) dispatch(setPage(currentPage + 1));
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default PaginationLoader;
