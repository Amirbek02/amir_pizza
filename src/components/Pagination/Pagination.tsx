import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

type PaginationProps = {
  onChangePages: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ onChangePages }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePages(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
