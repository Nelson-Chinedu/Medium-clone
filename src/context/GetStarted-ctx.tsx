import { createContext, useState, FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type StateVal = {
  toggleGetStarted: boolean;
  signIn: boolean;
  signUp: boolean;
  email: boolean;
};

export const GetStartedContext = createContext(null);

const GetStartedContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = useState<StateVal>({
    toggleGetStarted: false,
    signIn: false,
    signUp: false,
    email: false,
  });

  return (
    <GetStartedContext.Provider value={[state, setState]}>
      {children}
    </GetStartedContext.Provider>
  );
};

export default GetStartedContextProvider;
