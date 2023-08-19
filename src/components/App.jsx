import React, { useState, useEffect } from 'react';
import { fetchPixabay } from '../resources/fetchPixabay';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Searchbar} from './Searchbar/Searchbar';
import css from './styles.module.css';
import {Button} from './Button/Button';
import { Grid } from 'react-loader-spinner';
import {Modal} from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [found, setFound] = useState(false);
  const [modal, setModal] = useState(false);
  const [largeURL, setLargeURL] = useState('');

  useEffect( () => {
    async function FetchApi() {
      const newData = await fetchPixabay(search, 1);
      setImages([...newData.hits]);
      setPage(1);
      setFound(false);
      setModal(false);
      setLargeURL('');
    }

    if(search !== "") FetchApi();
  }, [search]);

  
  //-------------------------------------------------
  //------------ FUNCTIONS
  const handleSearch = value => {
    setSearch(value);
    setFound(true);
  };

  const handlePage = async () => {
    const newData = await fetchPixabay(search, page + 1);
    setPage(page + 1);
    setImages( preVal => [...preVal, ...newData.hits]);
  };

  const handleModal = (imgID) => {
    const image = images.find(item => item.id === imgID);
    setLargeURL(image.largeImageURL);
    setModal(true);
  }

  const closeModal = () => { setModal(false) }


  //-------------------------------------------------
  //------------ RETURN
    return (
      <div className={css.App}>
        <Searchbar handleSearch={handleSearch} />
        { found && <Grid/> }
        {images.length !== 0 && <ImageGallery handleModal={handleModal} images={images} />}
        {images.length !== 0 && <Button loadMore={handlePage} />}
        {modal && <Modal closeModal={closeModal} url={largeURL} />}
      </div>
    );
  }
