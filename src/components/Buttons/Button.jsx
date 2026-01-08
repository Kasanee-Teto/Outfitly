import React, { Fragment } from 'react';
import style from './Button.module.css';

export default function Button({text = 'Button', onClick}) {
  return (
    <Fragment>
        <button className={style.button} onClick={onClick}>{text}</button>
    </Fragment>
  );
}
