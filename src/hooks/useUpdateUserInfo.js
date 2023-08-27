import { useSelector } from 'react-redux';
import {
    selectUserInfo,
 } from '../redux/Auth/selectors';

export const useUpdateUserInfo = () => {
    const { name, email, phone, birthday, skype, userImgUrl } =
    useSelector(selectUserInfo);

return {
        name,
        email,
        phone,
        birthday,
        skype,
    userImgUrl,
};
};
