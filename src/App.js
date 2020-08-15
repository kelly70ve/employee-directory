import React from 'react';
import Navbar from "./components/Navbar.js";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Input />
        <Table />
      </Wrapper>
    </div>
  );
}

export default App;
