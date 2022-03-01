import { FunctionComponent, ReactNode } from 'react';
import { Tabs } from 'antd';

export const { TabPane } = Tabs;

function callback(key: string) {
  console.log(key);
}

type Props = {
  children: ReactNode;
  defaultActiveKey: string;
};

const Index: FunctionComponent<Props> = ({ children, defaultActiveKey }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} onChange={callback}>
      {children}
    </Tabs>
  );
};

export default Index;
