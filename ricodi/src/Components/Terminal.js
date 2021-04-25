import React from 'react'
import Terminal from 'terminal-in-react';
import { ReactTerminal } from "react-terminal";
  

const RunTerminal = (props) => {


    return (

        <Terminal
          allowTabs={false}
          color='green'
          backgroundColor='black'
          barColor='green'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'run_test()': ()=> window.alert("All test cases passed successfully!"),
            'run_file()': ()=> window.alert("Finished running python file solution.py. File ran without errors!"),
            showmsg:'Hello World',
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'run_test()': "Run pre-loaded test cases",
            'run_file()': "Run solution.py"
          }}
          msg={props.text}
          hideTopBar='false'
        />
    )
}

export default RunTerminal
