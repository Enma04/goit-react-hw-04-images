import React from "react";
import css from '../styles.module.css';

export const Modal = ({ closeModal, url }) => {
  return(
    <div onClick={closeModal} className={css.Overlay} >
      <div className={css.Overlay}>
        <img width="900px" src={url} alt="" />
      </div>
    </div>
  );
}