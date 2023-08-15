import ReactPaginate from 'react-paginate';
import { useState } from 'react';

export default function Pagination({ capsulesArr }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const lastPage = currentPage + itemsPerPage;
  const currentItems = capsulesArr.slice(currentPage, lastPage);
  const pageCount = Math.ceil(capsulesArr.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % capsulesArr.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setCurrentPage(newOffset);
  };

  const buttonPrev = () => {
    return (
      <div className="btn relative dark:bg-gray-800 dark:border-gray-700 w-[100px] h-[40px] lg:w-[150px] lg:h-[50px] mx-2 overflow-hidden cursor-pointer">
        <div className="hover bg-white h-full w-full absolute translate-y-[100%]"></div>
        <button className="font-bold w-full h-full absolute">Prev</button>
      </div>
    );
  };

  const buttonNext = () => {
    return (
      <div className="btn relative dark:bg-gray-800 dark:border-gray-700 w-[100px] h-[40px] lg:w-[150px] lg:h-[50px] mx-2 overflow-hidden cursor-pointer">
        <div className="hover bg-white h-full w-full absolute translate-y-[100%]"></div>
        <button className="font-bold w-full h-full absolute">Next</button>
      </div>
    );
  };

  return (
    <>
      {<div className="capsules gap-[2rem] px-8 mb-32">{currentItems}</div>}

      <ReactPaginate
        nextLabel={buttonNext()}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={buttonPrev()}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        disabledClassName="disabled"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
