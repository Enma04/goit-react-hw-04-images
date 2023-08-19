import React from 'react';
import css from '../styles.module.css';

export const ImageGalleryItem = ({ data, sendID }) => {
  const takeID = (e) => {
    const id = JSON.parse(e.target.attributes[0].value);
    sendID(id);
  }

  return data.map( item => (
    (<li key={item.id} className={css.ImageGalleryItem}>
      <img onClick={takeID} imgid={item.id} src={item.webformatURL} alt={`Img-${item.id}`} className={css.ImageGalleryItem} />
    </li>)
  ));
}
