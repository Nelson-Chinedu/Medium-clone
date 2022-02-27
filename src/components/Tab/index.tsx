import { FunctionComponent, ReactNode } from 'react';
import { Tabs } from 'antd';

export const { TabPane } = Tabs;

function callback(key: string) {
  console.log(key);
}

type Props = {
  children: ReactNode;
};

const Index: FunctionComponent<Props> = ({ children }) => {
  return (
    <Tabs defaultActiveKey="2" onChange={callback}>
      {children}
    </Tabs>
  );
};

export default Index;
