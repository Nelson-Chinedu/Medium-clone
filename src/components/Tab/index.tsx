import { FunctionComponent, ReactNode } from 'react';
import { Tabs } from 'antd';

export const { TabPane } = Tabs;

type Props = {
  children: ReactNode;
  defaultActiveKey: string;
  onChange?: any;
};

const Index: FunctionComponent<Props> = ({
  children,
  defaultActiveKey,
  onChange,
}) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} onChange={onChange}>
      {children}
    </Tabs>
  );
};

export default Index;
