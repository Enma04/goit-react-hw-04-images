import React from 'react';
import css from '../styles.module.css';

export const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={css.Button}>
      Load more
    </button>
  );
}
