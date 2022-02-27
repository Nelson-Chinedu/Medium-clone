import { FunctionComponent } from 'react';

import { Chip } from 'src/components';

const TOPICS: string[] = [
  'IOS',
  'User Experience',
  'React Native',
  'Art',
  'Elixir',
  'Robotics',
];

const Recommended: FunctionComponent<{}> = () => {
  return (
    <div className="mt-8">
      <h5 className="font-semibold text-base mb-1">Recommended topics</h5>
      <div className="flex flex-wrap">
        {TOPICS.map((topic: string) => (
          <Chip key={topic}>
            <p className="text-sm">{topic}</p>
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
