import logo from './logo.svg';
import './App.css';
import CodeEditor from "./Components/CodeEditor"
import RunTerminal from "./Components/Terminal"
import Row from 'react-bootstrap/Row'
import { Button, Col, Navbar } from 'react-bootstrap';
import FontAwesomeIcon from 'react-fontawesome';
import MenuBar from './Components/MenuBar'
// import '../node_modules/font-awesome/css/font-awesome.min.css'



function App() {
    return ( 
        <div>
            <MenuBar></MenuBar>
            <div></div>
            <Row>
                <Col sm={8}><CodeEditor /></Col>
                <Col sm={4}>
                    <div><img height="100%" width="100%" src={"https://j.gifs.com/oV4Y5j.gif"} width="100%"/></div>
                    <Row className="ButtonCols">
                        <Col sm={2}></Col>
                        <Col className="ButtonCols" sm={2}><Button className="RoundButton" variant="light" title="Toggle microphone">🎙</Button></Col>
                        <Col className="ButtonCols" sm={2}><Button className="RoundButton" variant="light" title="Toggle video">🎥</Button></Col>
                        <Col className="ButtonCols" sm={2}><Button className="RoundButton" variant="light" title="Open chat">💬</Button></Col>
                        <Col className="ButtonCols" sm={2}><Button className="RoundButton" variant="light" title="Add participant">👥</Button></Col>
                    </Row>
                    {/* <Row><img width="30%" src={"https://qph.fs.quoracdn.net/main-qimg-4c80e141cf951dbd5f1d6e5f80a8d49f.webp"}></img></Row> */}
                    <iframe height="89%" width="100%" src="https://docs.python.org/3/" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="Terminal">
                <RunTerminal text="Run file by entering command 'run_file()'"></RunTerminal>
                </Col>
                <Col sm={4} className="Terminal"><RunTerminal text="Run test cases by entering command 'run_test()'"></RunTerminal></Col>
            </Row>
            
        </div>
    )
}

export default App;