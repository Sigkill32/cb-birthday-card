import React, { Component } from "react";
import BirthdayCard from "./components/birthdayCard";
import ReasonDeteminer from "./components/reasonDerminer";

class App extends Component {
  state = {
    reason: "",
    showCard: false
  };

  handleEscape = () => {
    this.setState({ showCard: false });
  };

  handleGen = () => {
    this.setState({ showCard: true });
  };

  handleChange = e => {
    const reason = e.target.value;
    this.setState({ reason });
  };

  render() {
    const { reason, showCard } = this.state;
    return (
      <div>
        {showCard ? (
          <BirthdayCard reason={reason} onHandleClick={this.handleEscape} />
        ) : (
          <ReasonDeteminer
            onHandleChange={this.handleChange}
            value={reason}
            onHandleGen={this.handleGen}
          />
        )}
      </div>
    );
  }
}

export default App;
