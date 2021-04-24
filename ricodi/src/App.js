import logo from './logo.svg';
import './App.css';
import CodeEditor from "./Components/CodeEditor"
import RunTerminal from "./Components/Terminal"
import Row from 'react-bootstrap/Row'
import { Button, Col, Navbar } from 'react-bootstrap';
import FontAwesomeIcon from 'react-fontawesome';
// import '../node_modules/font-awesome/css/font-awesome.min.css'



function App() {
    return ( 
        <div>
            {/* <Row><Navbar bg="dark" expand="lg"></Navbar></Row> */}
            <Row>
                <Col sm={8}><CodeEditor /></Col>
                <Col sm={4}>
                    <div><img height="100%" width="100%" src={"https://j.gifs.com/oV4Y5j.gif"} width="100%"/></div>
                    <Row>
                        <Col><Button variant="dark" block style={{radius: 10}}>🎙️Mic</Button></Col>
                        <Col><Button variant="dark" block style={{radius: 10}}>🎥Video</Button></Col>
                        <Col><Button variant="dark" block style={{radius: 10}}>💬Chat</Button></Col>
                    </Row>
                    {/* <Row><img width="30%" src={"https://qph.fs.quoracdn.net/main-qimg-4c80e141cf951dbd5f1d6e5f80a8d49f.webp"}></img></Row> */}
                    <iframe height="89%" width="100%" src="https://docs.python.org/3/" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                <RunTerminal text="Run file by entering command 'run_file()'"></RunTerminal>
                </Col>
                <Col><RunTerminal text="Run test cases by entering command 'run_test()'"></RunTerminal></Col>
            </Row>
            
        </div>
    )
}

export default App;