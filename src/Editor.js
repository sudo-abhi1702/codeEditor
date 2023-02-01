import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import {Controlled as CodeMirror} from 'react-codemirror2'
import { useState } from "react";
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/css/css.js');
require('codemirror/addon/edit/closetag.js')



function Editor(props) {
  const editor = React.useRef()
  const wrapper = React.useRef()
  const editorWillUnmount = () => {
    editor.current.display.wrapper.remove()
    wrapper.current.hydrated = false
  }
const [code,setCode] = useState("");

return (
      <div className="editor">
     <CodeMirror
  value={code}
  ref={wrapper}
  options={{
    mode: props.language,
    theme: 'material',
    lineNumbers: true,
    readOnly: false,
    className: 'editor',
    lineWrapping: true,
    autoCloseTags: true,
    matchTags: true,
    autoCloseBrackets: true,
    
  }}
  onBeforeChange={(editor, data, value) => {
    console.log("triggered")
    setCode(value);
  }}
  editorDidMount={(e) => editor.current = e}
  editorWillUnmount={editorWillUnmount}
 
/>
      </div>
    );
}


  
export default Editor;
