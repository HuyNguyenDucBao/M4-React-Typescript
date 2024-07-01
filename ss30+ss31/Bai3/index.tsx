import React, { ChangeEvent, Component } from "react";

export default class Bai3 extends Component<{}, { name: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Kha",
    };
  }

  click = () => {
    this.setState({
      name: "Ha",
    });
  };
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={this.click}>Click</button>
      </div>
    );
  }
}
