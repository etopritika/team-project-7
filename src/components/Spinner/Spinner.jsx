import React from 'react';
import css from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={css.spinner__container}>
      <div className={css.spinner}></div>
    </div>
  );
}
