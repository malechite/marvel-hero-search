import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Heroes.scss';
import { Card, Elevation } from '@blueprintjs/core';
import { Col } from 'react-flexbox-grid';
import Avatar from './Avatar.js';

export default class Hero extends Component {
  render() {
    const { name, description, thumbnail } = this.props.hero;
    return (
      <Col xs={12} md={4} className={styles.col}>
        <Card elevation={Elevation.ONE}>
          <Avatar thumbnail={thumbnail} />
          <h5 className="bp3-heading">{name}</h5>
          <p>{description}</p>
        </Card>
      </Col>
    );
  }
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired
};
