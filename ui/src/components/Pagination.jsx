import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = function PaginationComponent({
  baseUrl,
  currentPage,
  totalPages,
}) {
  const currentPageNumber = parseInt(currentPage, 10);

  return (
    <div className="pagination flex justify-center items-center gap-x-3">
      {currentPageNumber > 1 && (
        <Link to={`${baseUrl}?page=${currentPageNumber - 1}`}>Prev</Link>
      )}

      <p>{currentPage}</p>

      {currentPageNumber !== totalPages && (
        <Link to={`${baseUrl}?page=${currentPageNumber + 1}`}>Next</Link>
      )}
    </div>
  );
};

export default Pagination;
