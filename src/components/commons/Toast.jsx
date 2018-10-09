import React, { Component } from 'react';

class Toast extends Component {
  constructor() {
    super();
    this.state = {
      toastStyle: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        padding: '10px',
        background: 'rgba(0, 0, 0, .3)',
        color: '#fff',
        zIndex: 999
      }
    };
  }
  render() {
    return (
      <div style={this.state.toastStyle}>
        Hello, I'm a Toast !
      </div>
    );
  }
}

export default Toast;