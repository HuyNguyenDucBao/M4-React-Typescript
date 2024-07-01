import React, { Component } from "react";

import Conn from "./Conn";

type StateType = {
  name: string;
};

export default class Bai5 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Đình Kha ",
    };
  }
  render() {
    return (
      <div>
        <Conn name={this.state.name} />
      </div>
    );
  }
}
