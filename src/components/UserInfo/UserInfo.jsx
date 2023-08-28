import { useAuth } from '../../hooks/useAuth';
import css from './UserInfo.module.css';

export default function UserInfo(){
  function getInitials(name) {
    if (name) {
      const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();
      return initials;
    } else {
      return name;
    }
  }

  const { name, avatar } = useAuth();

  const displayName = avatar ? (
    <img src={avatar} alt="UserPicture" />
  ) : (
    <div className={css.backgrouNdname}>
      <p className={css.userNameIcon}>{getInitials(name)}</p>
    </div>
  );
  return (
    <div className={css.wrapper}>
      <p className={css.userName}>{name}</p>
      <div className={css.userPicture }>{displayName}</div>
    </div>
  );
};
