import { useContext } from 'react';
import { AuthContext } from 'src/context/auth-ctx';

type Props = {
  isLoggedIn: boolean;
  isLoading: boolean;
  handleGoogle: () => void;
  handleEmail: () => void;
  handleFacebook: () => void;
};

const useAuth = () => {
  const { isLoggedIn, isLoading, handleGoogle, handleEmail, handleFacebook } =
    useContext<Props>(AuthContext);
  return { isLoggedIn, isLoading, handleGoogle, handleEmail, handleFacebook };
};

export default useAuth;
