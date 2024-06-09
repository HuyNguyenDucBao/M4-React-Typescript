import React, { Component, ChangeEvent } from "react";

interface DateInputState {
  selectedDate: string;
}

class Exercise4 extends Component<{}, DateInputState> {
  state: DateInputState = {
    selectedDate: "",
  };

  handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedDate: e.target.value });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <div>
        <h2>Thời gian:</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={this.handleDateChange}
        />

        {selectedDate && (
          <div>
            <h2>Thời gian: {selectedDate}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Exercise4;
