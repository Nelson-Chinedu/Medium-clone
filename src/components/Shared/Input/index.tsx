import React, { FunctionComponent } from 'react';

type Props = {
  type: 'text';
  className: string;
  handleClick?: () => void;
  handleBlur?: () => void;
};

const Index: FunctionComponent<Props> = ({
  type,
  className,
  handleClick,
  handleBlur,
}) => {
  return (
    <input
      type={type}
      className={className}
      onClick={handleClick}
      onBlur={handleBlur}
    />
  );
};

export default Index;
