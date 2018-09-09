import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Characters.scss';
import { Card, Elevation } from '@blueprintjs/core';
import { Col } from 'react-flexbox-grid';
import Avatar from './Avatar.js';

export default class Character extends Component {
  render() {
    const { name, status, image } = this.props.hero;
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className={styles.col}>
        <Card elevation={Elevation.ONE}>
          <Avatar url={image} />
          <h5 className="bp3-heading">{name}</h5>
          <p>{status}</p>
        </Card>
      </Col>
    );
  }
}

Character.propTypes = {
  hero: PropTypes.object.isRequired
};
