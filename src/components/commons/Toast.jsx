import React, { Component } from 'react';

class Toast extends Component {
  constructor() {
    super();
    this.state = {
      toastStyle: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        width: '180px',
        padding: '10px',
        marginLeft: '-90px',
        textAlign: 'center',
        color: '#fff',
        zIndex: 999,
        borderRadius: '4px',
        boxSizing: 'boder-box',
        background: 'rgba(0, 0, 0, .3)'
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