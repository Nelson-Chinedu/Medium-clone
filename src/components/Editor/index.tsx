import React, { useRef, useCallback } from 'react';
import { createReactEditorJS } from 'react-editor-js';

let Header = '';
let Quote = '';

if (typeof window !== 'undefined') {
  Header = require('@editorjs/header');
  Quote = require('@editorjs/quote');
}

const ReactEditorJS = createReactEditorJS();

const Editor = () => {
  const editorCore = useRef(null);

  const EDITOR_JS_TOOLS = {
    header: Header,
    quote: Quote,
  };

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  // const handleSave = useCallback(async () => {
  //   const savedData = await editorCore.current.save();
  //   console.log(savedData);
  // }, []);

  return (
    <>
      <ReactEditorJS
        holder="editor"
        onInitialize={handleInitialize}
        placeholder="Write here..."
        tools={EDITOR_JS_TOOLS}
      />
      <div ref={editorCore}></div>
    </>
  );
};

export default Editor;
