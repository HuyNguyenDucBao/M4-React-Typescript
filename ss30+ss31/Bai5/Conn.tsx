import React, { Component } from "react";
type PropsType = {
  name: string;
};
export default class Conn extends Component<PropsType, { name: string }> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      name: "Ha",
    };
  }
  click = () => {
    this.setState({
      name: this.props.name,
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
