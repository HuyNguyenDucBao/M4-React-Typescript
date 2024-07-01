import React, { Component } from "react";

export default class Bai1 extends Component<{}, { name: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Kha",
    };
  }
  render() {
    return (
      <div>
        BAI 1:<h5>{this.state.name}</h5>
      </div>
    );
  }
}
