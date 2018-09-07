import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Heroes.scss';

export default class Avatar extends Component {
  render() {
    const { path, extension } = this.props.thumbnail;
    return (
      <img src={path + '.' + extension} className={styles.thumbnail} />
    );
  }
}

Avatar.propTypes = {
  thumbnail: PropTypes.object.isRequired
};
