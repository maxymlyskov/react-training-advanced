import React from "react";

function withTooltip(Component) {
  return class WithTolltip extends React.Component {
    state = { showTooltip: false };

    mouseOver() {
      //   this.setState({ showTooltip: true });
      console.log("over");
    }
    mouseOut() {
      console.log("out");
      //   this.setState({ showTooltip: false });
    }

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component showTooltip={this.state.showTooltip} {...this.props} />
        </div>
      );
    }
  };
}
export default withTooltip;
