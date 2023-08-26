import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectUserInfo,
 } from '../redux/Auth/selectors';

export const useAuth = () => {
// const isLoggedIn = useSelector(selectIsLoggedIn);
    const { name, email, phone, birthday, skype, userImgUrl } =
    useSelector(selectUserInfo);
//   const user = useSelector(selectUser);

return {
//  isLoggedIn,
        name,
        email,
        phone,
        birthday,
        skype,
    userImgUrl,
    // user,
};
};
