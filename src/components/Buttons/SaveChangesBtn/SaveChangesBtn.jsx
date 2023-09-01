import React from 'react';
import css from './SaveChangesBtn.module.css';

const SaveChangesBtn = ({ isChanged }) => {
  return (
    <button
      className={css.SaveChangesBtn + (isChanged ? ' ' + css.disabled : '')}
      disabled={isChanged}
      type="submit"
    >
      Save Changes
    </button>
  );
};

export default SaveChangesBtn;
