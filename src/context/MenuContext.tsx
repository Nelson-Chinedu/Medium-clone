import { createContext, useState, FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type StateVal = {
  toggleMenu: boolean;
};

export const MenuContext = createContext(null);

const MenuContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = useState<StateVal>({ toggleMenu: false });

  return (
    <MenuContext.Provider value={[state, setState]}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
