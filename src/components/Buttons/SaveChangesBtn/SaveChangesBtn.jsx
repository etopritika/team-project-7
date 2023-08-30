import React from 'react';
import css from './SaveChangesBtn.module.css';

const SaveChangesBtn = () => {
  return (
    <button className={css.SaveChangesBtn} type="submit">
      Save Changes
    </button>
  );
};

export default SaveChangesBtn;
