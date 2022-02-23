import React, { FunctionComponent } from 'react';

import Navigation from 'src/pages/App/NewStory/Navigation';

const NewStory: FunctionComponent<{}> = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Navigation />
      <div
        className="w-3/4 mx-auto my-20 border border-blue-400 h-50"
        contentEditable
        suppressContentEditableWarning
      ></div>
    </div>
  );
};

export default NewStory;
