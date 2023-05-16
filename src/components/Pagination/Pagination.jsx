import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './pagination.module.scss'

function Pagination({onChangePages, pageCount}) {
  return (
    <ReactPaginate
    className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => onChangePages(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        forcePage={pageCount}
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination