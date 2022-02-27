import React, { FunctionComponent, SetStateAction } from 'react';

type Props = {
  type: 'text' | 'email';
  className: string;
  handleClick?: () => void;
  handleBlur?: () => void;
  handleChange?: (e: { target: { value: SetStateAction<string>; }; }) => void;
};

const Index: FunctionComponent<Props> = ({
  type,
  className,
  handleClick,
  handleBlur,
  handleChange
}) => {
  return (
    <input
      type={type}
      className={className}
      onClick={handleClick}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default Index;
