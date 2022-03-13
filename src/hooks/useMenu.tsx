import { useContext } from 'react';
import { MenuContext } from 'src/context/MenuContext';

const useMenu = () => {
  const [state, setState] = useContext(MenuContext);

  return [state, setState];
};

export default useMenu;
