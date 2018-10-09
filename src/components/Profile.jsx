import React, { Component } from 'react';
import _ from 'lodash/array';
import profileStyle  from '../less/profile.less';

import 'weui';

class Profile extends Component {
  render() {
    return (
      <div className={profileStyle['hello']}>
        <h3>Profile page</h3>
        <div className="weui-flex js_category">
            <p className="weui-flex__item">表单</p>
            <img src="./images/icon_nav_form.png" alt="" />
        </div>
      </div>
    );
  }
}

export default Profile;