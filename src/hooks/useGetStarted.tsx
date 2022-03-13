import { useContext } from 'react';
import { GetStartedContext } from 'src/context/GetStarted-ctx';

const useGetStarted = () => {
  const [state, setState] = useContext(GetStartedContext);

  return [state, setState];
};

export default useGetStarted;
