import React from 'react';
import logo from '../../../img/goose.png';
import css from './SideBarLogo.module.css';

export default function SideBarLogo() {
  return (
    <>
      <div className={css.logoDiv}>
        <img width="71" height="68" src={logo} alt="SideBarLogo" className={css.logo}></img>
        <h1 className={css.logoName}>
          T<span className={css.logoOO}>a</span>skW<span className={css.logoOO}>a</span>ve
        </h1>
      </div>
    </>
  );
}
