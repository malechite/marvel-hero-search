import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Characters.scss';

export default class Avatar extends Component {
  render() {
    const url = this.props.url || null;
    return (
      <img src={url} className={styles.thumbnail} />
    );
  }
}

Avatar.propTypes = {
  url: PropTypes.string
};
