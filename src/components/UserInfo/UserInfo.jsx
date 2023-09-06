import { useAuth } from '../../hooks/useAuth';
import { useMemo } from 'react';
import css from './UserInfo.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function UserInfo(){
  const { user } = useAuth();

  const location = useLocation();
  function isActive(pathname) {
    return location.pathname.includes(pathname);
  }
  
  const {name, avatarURL} = user;

  const memoizedName = useMemo(() => name, [name]);
  const memoizedAvatarURL = useMemo(() => avatarURL, [avatarURL]);
  
  // const initials = useMemo(() => {
  //   if (name) {
  //     return name
  //       .split(' ')
  //       .map(word => word.charAt(0))
  //       .join('')
  //       .toUpperCase();
  //   } else {
  //     return name;
  //   }
  // }, [name]);

  // const displayName = avatarURL ? (
  //   <img src={avatarURL} alt="UserPicture" />
  // ) : (
  //   <div className={css.backgrouNdname}>
  //     <p className={css.userNameIcon}>{initials}</p>
  //   </div>
  // );
  return (
    <Link to="/user/account" className={`${css.navAvatar} ${isActive('/user/account') ? css.active : ''}`}>
    <div className={css.wrapper}>
      <p className={css.userName}>{memoizedName}</p>
      {/* <div className={css.userPicture }>{displayName}</div> */}
      <img className={css.userPicture } src={memoizedAvatarURL} alt="UserPicture" />
    </div>
    </Link>
  );
};
