import React from 'react';
import Navbar from "./components/Navbar.js";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Input />
      </Wrapper>
    </div>
  );
}

export default App;
