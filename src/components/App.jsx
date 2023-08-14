import React, { useState, useEffect } from 'react';
import { fetchPixabay } from '../resources/fetchPixabay';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './styles.module.css';
import Button from './Button/Button';
import { Grid } from 'react-loader-spinner';
import Modal from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [found, setFound] = useState(false);
  const [modal, setModal] = useState(false);
  const [largeURL, setLargeURL] = useState('');

  useEffect( () => {
    async function FetchApi() {
      const newData = await fetchPixabay(search, 1).then();
      setImages([...newData.hits]);
      setPage(1);
      setFound(false);
      setModal(false);
      setLargeURL('');
      console.log("New data: ", newData.hits);
    }

    if(search !== "") FetchApi();
    
  }, [search]);

  //-------------------------------------------------
  //------------ COMPONENTS
  /* async componentDidUpdate(prevProps, prevSate) {
    const { search } = this.state;

    if (prevSate.search !== search) {
      const newData = await fetchPixabay(search, 1).then();
      this.setState(() => ({
        images: [...newData.hits],
        page: 1,
        found: false,
        modal: false,
        largeURL: '',
      }));
    }
  } */

  //-------------------------------------------------
  //------------ FUNCTIONS
  const handleSearch = e => {
    e.preventDefault();
    const value = e.target.childNodes[1].value;
    setSearch(value);
    setFound(true);
  };

  const handlePage = async () => {
    const { search, page, images } = this.state;
    const newData = await fetchPixabay(search, page + 1).then();

    this.setState(() => ({
      page: page + 1,
      images: [...images, ...newData.hits],
    }));
  };

  const handleModal = (e) => {
    const { images } = this.state;
    const imgID = JSON.parse(e.target.attributes[0].value);
    const image = images.find(item => item.id === imgID);

    this.setState(() => ({
      modal: true,
      largeURL: image.largeImageURL,
    }));
  }

  const closeModal = () => {
    this.setState({modal: false});
  }

  //-------------------------------------------------
  //------------ RENDER

    /* const { images, found, modal, largeURL } = this.state;
    const { handleSearch, handlePage, handleModal, closeModal } = this; */

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

