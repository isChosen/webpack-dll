import React, { Component } from 'react';
import _ from 'lodash/array';
import Toast from './commons/Toast';
import profileStyle  from '../less/profile.less';

import 'weui/dist/style/weui.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      showToast: true
    }
  }

  componentDidMount() {
    console.log('lodash/array -> ', _);
    this.timer = setTimeout(() => {
      this.setState({showToast: false});
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { showToast } = this.state;
    let toast = showToast ? <Toast/> : null;
    return (
      <div className={profileStyle['hello']}>
        <h3>Profile page</h3>
        <a href="javascript:;" className="weui-btn weui-btn_plain-default">按钮</a>
        <a href="javascript:;" className="weui-btn weui-btn_primary weui-btn_loading"><i className="weui-loading"></i>页面主操作 Loading</a>
        { toast }
      </div>
    );
  }
}

export default Profile;