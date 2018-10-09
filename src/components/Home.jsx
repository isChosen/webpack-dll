import React, { Component } from 'react';
import Toast from './commons/Toast';
import _ from 'lodash/array';
import Axios from 'axios';
import { DatePicker } from 'antd';

import 'antd/dist/antd.min.css';

import d2 from '../images/d2.jpg';
import homeStyle  from '../less/home.less';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showToast: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showToast: false});
    }, 3000);
  }

  render() {
    const { showToast } = this.state;
    let toast = showToast ? <Toast/> : null;
    return (
      <div className={homeStyle['home']}>
        { toast }
        <div className={homeStyle['title']}>Home</div>
        <div className={homeStyle['banner']}>
          <img src={d2} alt="龙猫"/>
        </div>
        <DatePicker />
      </div>
    );
  }
}

export default Home;