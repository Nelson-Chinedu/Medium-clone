import React, { useRef, useCallback } from 'react';
import { createReactEditorJS } from 'react-editor-js';

const ReactEditorJS = createReactEditorJS();

const Editor = () => {
  const editorCore = useRef(null);

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  // const handleSave = useCallback(async () => {
  //   const savedData = await editorCore.current.save();
  //   console.log(savedData);
  // }, []);

  return (
    <>
      <div ref={editorCore}></div>
      <ReactEditorJS
        holder="editor"
        onInitialize={handleInitialize}
        // tools={EDITOR_JS_TOOLS}
      />
    </>
  );
};

export default Editor;
