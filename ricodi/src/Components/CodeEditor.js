import React from 'react'
import { split as SplitEditor } from "react-ace";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/ext-error_marker"


function defaultString(){
  "hello world!"
}


const CodeEditor = () => {

    function onChange(newValue) {
        console.log("change", newValue);
    }

   
    return ( 
       <AceEditor
        height="70vh"
        width="102.6%"
        fontSize="1rem"
        mode="python"
        theme="terminal"
        value={
          "def solution(input):\n\n\tsolution = []\n\n\tfor char in 'helloworld':\n\n\t\tsolution.append(char)\n\n\treturn solution\n\n\n\n\nif __name__=='__main__':\n\tsolution('input')"
        }
        annotations={[{ row: 2, column: 2, type: 'error', text: 'There is some error on this line'}]}
        onChange={onChange}
        markers={[{ startRow: 0, startCol: 2, endRow: 1, endCol: 20, className: 'error-marker', type: 'background' }]}
        editorProps={{ $blockScrolling: false }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
      />
        
    )
}

export default CodeEditor