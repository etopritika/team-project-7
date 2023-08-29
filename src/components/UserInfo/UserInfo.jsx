import { useAuth } from '../../hooks/useAuth';
import { useMemo } from 'react';
import css from './UserInfo.module.css';

export default function UserInfo(){
  console.log("render");
  const { user } = useAuth();
  
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
    <div className={css.wrapper}>
      <p className={css.userName}>{memoizedName}</p>
      {/* <div className={css.userPicture }>{displayName}</div> */}
      <img className={css.userPicture } src={memoizedAvatarURL} alt="UserPicture" />
    </div>
  );
};
