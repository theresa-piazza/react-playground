import React from 'react';

export default class Counter extends React.Component {
    state = {
      count: 0
    };

    handleButtonClick = () => {
        console.log(this.state.count)
    }

    render() {
      return (
        <div><br></br>
          <p>The current count: {this.state.count}</p>
          <button
            onClick={() => this.handleButtonClick()}>
            Add 1
          </button>
        </div>
      )
    }
  }