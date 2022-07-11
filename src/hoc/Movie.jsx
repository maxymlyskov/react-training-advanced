import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  render() {
    console.log(this.props.showTooltip);
    return <div>Movie {this.props.showTooltip && <div>Something</div>}</div>;
  }
}

export default withTooltip(Movie);
