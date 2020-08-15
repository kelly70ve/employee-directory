import React, { Component }  from 'react';
import Trow from "../Trow";
import API from "../../utils/API";

class Tbody extends Component {

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
          dob: employee.dob.date
        };

      })
      
      this.setState({ employees: empSimp })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <tbody>
        {this.state.employees.map(employee => (
          <Trow 
          image = {employee.image}
          name = {employee.name}
          phone = {employee.phone}
          email = {employee.email}
          dob = {employee.dob}
        />
        ))}

      </tbody>
    );
  }
}

export default Tbody;