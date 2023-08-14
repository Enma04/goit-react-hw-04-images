import React from "react";
import css from '../styles.module.css';

export default class Modal extends React.Component {
  render() {
    return(
      <div onClick={this.props.closeModal} className={css.Overlay} >
        <div className={css.Overlay}>
          <img width="900px" src={this.props.url} alt="" />
        </div>
      </div>
    );
  };
}