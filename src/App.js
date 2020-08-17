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
    employees: [],
    allEmployees: [],
    search: ""
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
      this.setState({ allEmployees: empSimp })
      this.setState({ employees: empSimp })
    })
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });


    // Live Search
    if (value !== "" ) {
      let empSearch = this.state.allEmployees.filter(employee => {
        if (
          employee.name.includes(value) || 
          employee.phone.includes(value) ||
          employee.email.includes(value) || 
          employee.dob.includes(value) 
        ) { return employee }
      });
      this.setState({ employees: empSearch })
    } else {
      this.setState({ employees: this.state.allEmployees })
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Input 
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
          />
          <Table
          employees = {this.state.employees} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
