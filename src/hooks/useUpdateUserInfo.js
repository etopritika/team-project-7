import { useSelector } from 'react-redux';
import { selectUserInfo } from '../redux/auth/selectors';

export const useUpdateUserInfo = () => {
  const user = useSelector(selectUserInfo);

  return {
    user,
  };
};
