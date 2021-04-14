import React, { FunctionComponent, ReactNode } from 'react';
import { Button } from 'antd';

type Props = {
  type: any;
  children: ReactNode;
  handleClick?: () => void;
  className: string;
  shape?: 'round';
  size: 'large' | 'middle' | 'small';
};
const Index: FunctionComponent<Props> = ({
  type,
  children,
  handleClick,
  className,
  shape,
  size,
}) => {
  return (
    <Button
      type={type}
      onClick={handleClick}
      className={className}
      shape={shape}
      size={size}
    >
      {children}
    </Button>
  );
};

export default Index;
