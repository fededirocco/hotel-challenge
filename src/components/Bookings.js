import React, { Component } from "react";
import { PropTypes } from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { getDatesBetweenDates } from '../utils/dates';

class Bookings extends Component {
  state = {
    names: null,
    dates: null,
    responses: []
  }

  handleNameChange = event => this.setState({ names: event.target.value.split("\n") });

  handleDateChange = event => this.setState({ dates: event.target.value.split("\n") });

  formatResponse = () => {
    const { names, dates } = this.state;
    const response = dates.map((date, index) => {
      const splitDates = date.split(" to");
      const newDates = getDatesBetweenDates(splitDates[0], splitDates[1]);
      return ({
        name: names[index],
        dates: newDates
      })
    });
    return response;
  }

  handleSubmit = () => this.props.setStateApp(this.formatResponse());

  render() {
    return (
      <div className="row">
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the hacker list (one hacker per line)"
          onChange={this.handleNameChange}
        />
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each hacker's stay (one range per line)"
          onChange={this.handleDateChange}
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className="block-center"
          onClick={this.handleSubmit}
        >
          Get Meals Schedule
        </Button>
      </div>
    );
  }
}

export default Bookings;
