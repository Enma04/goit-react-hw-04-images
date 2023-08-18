import React from 'react';
import css from '../styles.module.css';

export const Searchbar = ({ handleSearch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch( e.target.childNodes[1].value );
  }

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
