import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import LogIn from './components/LogIn';
import Register from './components/Register';


export class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="log-in" element={<LogIn />} />
            <Route exact path="register" element={<Register />} />

          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
