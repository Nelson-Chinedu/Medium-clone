import { FunctionComponent, ReactNode } from 'react';
import { Avatar } from 'antd';

type Props = {
  alt: string;
  shape: 'circle' | 'square';
  size: number | 'small' | 'large' | 'default';
  src: string | ReactNode;
};

const Index: FunctionComponent<Props> = ({ alt, shape, size, src }) => {
  return <Avatar shape={shape} alt={alt} size={size} src={src} />;
};

export default Index;
