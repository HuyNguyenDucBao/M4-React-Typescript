import { Component } from "react";
type StateType = {
  name: string;
};

export default class Exercises01 extends Component<{}, StateType> {
  constructor(props: StateType) {
    super(props);
    this.state = {
      name: "Tên của bạn",
    };
  }
  render() {
    return (
      <div>
        <p>Họ và tên: {this.state.name}</p>
      </div>
    );
  }
} 
