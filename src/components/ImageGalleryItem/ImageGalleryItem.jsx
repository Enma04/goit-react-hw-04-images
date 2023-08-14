import React from 'react';
import css from '../styles.module.css';

export const ImageGalleryItem = ({ data }) => {
  return data.map( item => (
    (<li key={item.id} className={css.ImageGalleryItem}>
      <img imgid={item.id} src={item.webformatURL} alt={`Img-${item.id}`} className={css.ImageGalleryItem} />
    </li>)
  ));
}
