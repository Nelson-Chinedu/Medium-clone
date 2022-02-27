import React, { FunctionComponent, ReactNode } from 'react';
import { Button } from 'antd';

type Props = {
  type: 'link' | 'default';
  children?: ReactNode;
  handleClick?: () => void;
  className: string;
  shape?: 'round' | 'circle';
  size?: 'large' | 'middle' | 'small';
  icon?: ReactNode;
};
const Index: FunctionComponent<Props> = ({
  type,
  children,
  handleClick,
  className,
  shape,
  size,
  icon,
}) => {
  return (
    <Button
      type={type}
      onClick={handleClick}
      className={className}
      shape={shape}
      size={size}
      icon={icon}
    >
      {children}
    </Button>
  );
};

export default Index;
