import { FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Chip: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="bg-gray-100 rounded-full px-3 py-1 mr-2 my-1">
      {children}
    </div>
  );
};

export default Chip;
