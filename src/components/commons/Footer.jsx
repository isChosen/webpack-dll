import React, { Component, Fragment } from 'react';
import NavLink from './NavLink';
import footerLess from '../../less/footer.less';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <NavLink to="/home" className={footerLess['tab']} activeClassName={footerLess['active']} >Home</NavLink>
        <NavLink to="/product" className={footerLess['tab']} activeClassName={footerLess['active']} >Product</NavLink>
        <NavLink to="/profile" className={footerLess['tab']} activeClassName={footerLess['active']} >Profile</NavLink>
      </Fragment>
    )
  }
}
