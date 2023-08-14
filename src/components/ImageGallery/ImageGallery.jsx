import React from 'react';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../styles.module.css';

export const ImageGallery = ({ images, handleModal }) => {
  return(
    <ul onClick={handleModal} className={css.ImageGallery}>
      <ImageGalleryItem data={images} />
    </ul>
  );
}
