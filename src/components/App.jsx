import React, { Component, Fragment } from 'react';
import Header from './commons/Header';
import Footer from './commons/Footer';

import appStyle from '../less/app.less';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className={appStyle['header']} ><Header /></div>
        <section className={appStyle['main']}>
          { this.props.children }
        </section>
        <div className={appStyle['footer']} ><Footer /></div>
      </Fragment>
    );
  }
}

export default App;