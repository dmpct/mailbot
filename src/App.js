import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar';
import MainArea from './components/mainarea';

function App() {
    const [state, setState] = useState(0);
    return (
        <div className="App container-fluid d-flex flex-column flex-grow-1 vh-100 overflow-hidden">
            <NavBar init={0} setout={(st)=>{setState(st);}}/>
            <MainArea state={state}/>
            <Footer received={0} running={0}/>
        </div>
    );
}

export default App;
