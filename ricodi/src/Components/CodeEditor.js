import React from 'react'
import { split as SplitEditor } from "react-ace";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/ext-error_marker"






const CodeEditor = () => {
    
   
    return ( 
       <AceEditor

        classNam="CodeEditor"
        height="65vh"
        width="103%"
        fontSize="1rem"
        mode="python"
        theme="monokai"
        value={"'''\nFind the youngest common ancestor\n\n          A\n       /     \\\n      B       C\n    /   \\   /   \\\n   D     E F     G\n /   \\\nH     I\n\n\nYoungest common ancestor for I and E is B\n'''\n\n# This is an input class. Do not edit.\nclass AncestralTree:\n    def __init__(self, name):\n        self.name = name\n        self.ancestor = None\n\ndef getDistanceToTopAncestor(topAncestor, descendant):\n\n    distance = 0\n    while descendant!=topAncestor:\n        distance+=1\n        descendant = descendant.ancestor\n    \n    return distance\n\ndef getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo):\n    # Write your code here.\n    distOneFromTop, distTwoFromTop = getDistanceToTopAncestor(topAncestor, descendantOne), getDistanceToTopAncestor(topAncestor, descendantTwo)\n    \n    diff = abs(distOneFromTop-distTwoFromTop)\n\n    if distOneFromTop>distTwoFromTop:\n        shorterDesc = descendantTwo\n        longerDesc = descendantOne \n    else:\n        shorterDesc = descendantOne\n        longerDesc = descendantTwo \n    \n    \n    while diff>0:\n        longerDesc = longerDesc.ancestor\n        diff-=1\n    \n    while longerDesc!=shorterDesc:\n        longerDesc = longerDesc.ancestor\n        shorterDesc = shorterDesc.ancestor\n    \n    return shorterDesc\n\n"}
        annotations={[{ row: 2, column: 2, type: 'error', text: 'There is some error on this line'}]}
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