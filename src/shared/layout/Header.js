import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Alignment,
  Button
} from '@blueprintjs/core';
import styles from './Header.scss';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  }
  render() {
    const { title = 'Marvel Hero Search' } = this.props;

    return (
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>{title}</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Link to="/" className={styles.headerLink}><Button className="bp3-minimal" icon="dashboard" text="Dashboard"/></Link>
          <Link to="/users" className={styles.headerLink}><Button className="bp3-minimal" icon="user" text="Users"/></Link>
        </Navbar.Group>
      </Navbar>
    );
  }
}


export default Header;
