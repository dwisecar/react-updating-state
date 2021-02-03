// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
      addressInfo: {
        city: 'NY',
        state: 'NY'
    }
    };
  }

  handleClick = () => {

    this.setState(previousState => {
        return {
        hasBeenClicked: !previousState.hasBeenClicked,
        
        addressInfo: {
            ...previousState.addressInfo,
            state: 'WA'
        }
    }})
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked! 
        {this.state.addressInfo.city}
        {this.state.addressInfo.state}
        </p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
export default ClickityClick