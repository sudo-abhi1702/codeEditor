import logo from './logo.svg';
import './App.css';
import './Editor.js'
import React from 'react';
import Editor from './Editor.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

function App() {
    const [codehtml,setCodehtml] = useState("");
    const [codecss,setCodecss] = useState("");
    const [codejs,setCodejs] = useState("");
    const editor1 = React.useRef()
    const wrapper1 = React.useRef()
    const editor2 = React.useRef()
    const wrapper2 = React.useRef()
    const editor3 = React.useRef()
    const wrapper3 = React.useRef()
    const editorWillUnmount = () => {
      editor1.current.display.wrapper.remove()
      wrapper1.current.hydrated = false
      editor2.current.display.wrapper.remove()
      wrapper2.current.hydrated = false
      editor3.current.display.wrapper.remove()
      wrapper3.current.hydrated = false
    }
    const srcDoc = `
      <html>
      <body>${codehtml}</body>
      <style>${codecss}</style>
      <script>${codejs}</script>
      
      </html>`

   console.log(srcDoc)
  return (
    
    <Container fluid>
      <Row noGutters>
      <Col>
     <CodeMirror
        value={codehtml}
        ref={wrapper1}
        options={{
          mode: "xml",
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
          setCodehtml(value);
        }}
        editorDidMount={(e) => editor1.current = e}
        editorWillUnmount={editorWillUnmount}
        />
      </Col>
      <Col>
     <CodeMirror
  value={codecss}
  ref={wrapper2}
  options={{
    mode: "css",
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
    setCodecss(value);
  }} 
  editorDidMount={(e) => editor2.current = e}
  editorWillUnmount={editorWillUnmount}
  />
      </Col>
      <Col>
     <CodeMirror
  value={codejs}
  ref={wrapper3}
  options={{
    mode: "javascript",
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
    setCodejs(value);
  }}
  editorDidMount={(e) => editor3.current = e}
  editorWillUnmount={editorWillUnmount}
  />
      </Col>
        
      </Row>
      <Row noGutters>
        <div className="bottom-pane" >
            <iframe srcdoc={srcDoc} width="100%" height="500"></iframe>
        </div>
      </Row>
      </Container>
    
  );
}

export default App;
