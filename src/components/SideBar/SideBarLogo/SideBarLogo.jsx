import React from 'react';
import logo from '../../../img/goose.png';
import css from './SideBarLogo.module.css';

export default function SideBarLogo() {
  return (
    <>
      <div className={css.logoDiv}>
        <img width="71" height="68" src={logo} alt="SideBarLogo" className={css.logo}></img>
        <h1 className={css.logoName}>
          G<i className={css.logoOO}>oo</i>seTrack
        </h1>
      </div>
    </>
  );
}
