import {
  FunctionComponent,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  FacebookAuthProvider,
} from 'firebase/auth';
import { app } from 'src/config/firebase';
import useLocalStorage from 'src/hooks/useLocalStorage';

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext(null);

const AuthContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [state] = useLocalStorage('mc_ct');

  const actionCodeSettings = {
    url: process.env.BASE_URL,
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios',
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12',
    },
    dynamicLinkDomain: process.env.DYNAMIC_LINK_DOMAIN,
  };

  useEffect(() => {
    setIsLoading(true);
    if (state) {
      setIsLoggedIn(true);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [state]);

  const handleGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = {
        photoURL: res.user.photoURL,
        displayName: res.user.displayName,
      };

      if (res) {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = JSON.stringify(credential.accessToken);
        const users = JSON.stringify(user);
        if (token) {
          localStorage.setItem('mc_ct', token);
          localStorage.setItem('mc_u', users);
          setIsLoggedIn(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmail = async () => {
    const email = '';
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      localStorage.setItem('emailForSignIn', email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebook = async () => {
    try {
      const res = await signInWithPopup(auth, facebookProvider);
      const user = {
        photoURL: res.user.photoURL,
        displayName: res.user.displayName,
      };

      if (res) {
        const credential = FacebookAuthProvider.credentialFromResult(res);
        const token = JSON.stringify(credential.accessToken);
        const users = JSON.stringify(user);
        if (token) {
          localStorage.setItem('mc_ct', token);
          localStorage.setItem('mc_u', users);
          setIsLoggedIn(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        handleGoogle,
        handleEmail,
        handleFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
