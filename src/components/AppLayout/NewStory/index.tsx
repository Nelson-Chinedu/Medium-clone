import React, { FunctionComponent, useState } from 'react';

import Navigation from 'src/components/AppLayout/NewStory/Navigation';

const NewStory: FunctionComponent<{}> = () => {
  const [el, setEl] = useState(0);
  let attr : any = [];
  const handleEnter = (e: any) => {
    if (e.key === 'Enter'){
      React.createElement('p', {}, 'this is it')
      // setEl(el + 1);
      attr.push(1);
    }
    console.log(attr.length, '>>')
  }
  return (
    <div className="w-4/5 mx-auto">
      <Navigation />
      <div className="w-3/4 mx-auto my-20 border border-blue-400 h-50" contentEditable suppressContentEditableWarning onKeyPress={handleEnter}>
        
      </div>
    </div>
  )
};

export default NewStory;