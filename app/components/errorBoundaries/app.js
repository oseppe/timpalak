import React, { Component } from 'react';

class App extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('componentDidCatch');
  }

  render() {
    if (this.state.hasError) {
      console.log('error has happened');
      return (
        <div>
          <h1>Something went wrong</h1>
        </div>
      )
    }
    return this.props.children;
  }
}

export default App;