import React, { Component } from "react";
import { PropTypes } from "prop-types";

const Meals = ({ response }) => {
  return (
    <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
      <ol id="list">
        {response.map(({ name, dates }) => 
          dates.map(date => 
            <div key={date}>
              <li className="morning">Breakfast for {name} on {date}</li>
              <li className="afternoon">Lunch for {name} on {date}</li>
              <li className="night">Dinner for {name} on {date}</li>
            </div>
          )
        )}
      </ol>
    </div>
  );
};
export default Meals;
