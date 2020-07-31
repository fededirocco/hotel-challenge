import React, { Component } from "react";
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";

class App extends Component {
  state = {
    isError: false,
    nameError: null,
    response: null
  }

  setStateApp = response => {
    response.some(item => {
      if (item.dates.length === 0) {
        this.setState({
          isError: true,
          nameError: item.name
        });
        return true;
      } else {
        this.setState({
          response: response,
          isError: false
        });
      }
    });
  }

  render() {
    const { isError, nameError, response } = this.state;  
    return (
      <div className="container-fluid">
        <center>
          <h2>Hacker Hostel</h2>
        </center>
        <div className="container">
          <Bookings setStateApp={this.setStateApp} setError={this.setError} />
          {isError ? 
            <Error name={nameError} />
            : response &&
              <Meals response={response} />
          }
        </div>
      </div>
    );
  }
}

export default App;
