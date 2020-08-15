import React, { Component }  from 'react';
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import API from "./utils/API";
import './App.css';

var dateFormat = require('dateformat');

class App extends Component {

  state = {
    employees: []
  }

  componentDidMount() {
    API.search()
    .then(res => {
      let empAll = res.data.results;

      let empSimp = empAll.map(employee => {
        return {
          image: employee.picture.thumbnail,
          name: `${employee.name.first} ${employee.name.last}`,
          phone: employee.phone,
          email: employee.email,
          dob: dateFormat(employee.dob.date, "mm-dd-yy")
        };

      })

      // empSimp.filter(employee => {
      //   employee.name.toLowerCase().split('')

      // })
      
      this.setState({ employees: empSimp })
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Input />
          <Table
          employees = {this.state.employees} 
          />
        </Wrapper>
      </div>
    );
  }
}

export default App;
