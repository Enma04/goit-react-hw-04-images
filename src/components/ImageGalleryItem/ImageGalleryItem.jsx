import React from 'react';
import css from '../styles.module.css';

export default class ImageGalleryItem extends React.Component {
  render() {
    const { data } = this.props;
    return data.map( item => (
      (<li key={item.id} className={css.ImageGalleryItem}>
        <img imgid={item.id} src={item.webformatURL} alt={`Img-${item.id}`} className={css.ImageGalleryItem} />
      </li>)
    ));
  }
}
