import React from 'react';
import css from '../styles.module.css';

export default class Button extends React.Component {
  render() {
    const { loadMore } = this.props;

    return (
      <button onClick={loadMore} className={css.Button}>
        Load more
      </button>
    );
  }
}
