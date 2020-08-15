import React, { Component }  from 'react';
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import API from "./utils/API";
import './App.css';

class App extends Component {

  render() {
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
}

export default App;
