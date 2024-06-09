import React, { Component } from "react";

type StateType = {
  selectedDate: string;
};

export default class Exercise3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedDate: "",
    };
  }

  handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedDate: e.target.value });
  };

  render() {
    return (
      <div>
        <p>
          Chọn ngày:
          <input
            type="date"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
          />
        </p>
        {this.state.selectedDate && (
          <p>Ngày đã chọn: {this.formatDate(this.state.selectedDate)}</p>
        )}
      </div>
    );
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
