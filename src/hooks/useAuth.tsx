import { useContext } from 'react';
import { AuthContext } from 'src/context/auth-ctx';

type Props = {
  isLoggedIn: boolean;
  handleGoogle: () => void;
  handleEmail: () => void;
  handleFacebook: () => void;
};

const useAuth = () => {
  const { isLoggedIn, handleGoogle, handleEmail, handleFacebook } =
    useContext<Props>(AuthContext);
  return { isLoggedIn, handleGoogle, handleEmail, handleFacebook };
};

export default useAuth;
