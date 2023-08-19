import React from 'react';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../styles.module.css';

export const ImageGallery = ({ images, handleModal }) => {
  const sendID = (id) => {
    handleModal(id);
  }
  
  return(
    <ul className={css.ImageGallery}>
      <ImageGalleryItem sendID={sendID} data={images} />
    </ul>
  );
}
