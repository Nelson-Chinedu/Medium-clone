import { FunctionComponent } from 'react';
import { FileAddOutlined } from '@ant-design/icons';

const ReadingList: FunctionComponent<{}> = () => {
  return (
    <div className="mt-8">
      <h5 className="font-semibold text-base mb-1">Reading List</h5>
      <p>
        Click the <FileAddOutlined /> on any story to easily add it to your
        reading list or a custom list that you can share.
      </p>
    </div>
  );
};

export default ReadingList;
