import { useSelector } from 'react-redux'; 
import { 
  selectUser, 
  selectIsLoggedIn, 
  selectIsRefreshing, 
} from '../redux/Auth/selectors'; 
 
export const useAuth = () => { 
  const isLoggedIn = useSelector(selectIsLoggedIn); 
  const { name, userImgUrl } = 
    useSelector(selectUser); 
  const isRefreshing = useSelector(selectIsRefreshing); 
 
  return { 
    isLoggedIn, 
    name, 
    userImgUrl, 
    isRefreshing, 
  }; 
};
