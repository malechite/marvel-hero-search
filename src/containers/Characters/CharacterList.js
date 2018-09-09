import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { InputGroup } from '@blueprintjs/core';
import styles from './Characters.scss';
import LargeSpinner from 'shared/loading/LargeSpinner';
import Character from './Character.js';
import { getCharacters, updateSearchTerm } from 'redux/modules/characters';

class CharacterList extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  handleSearchTerm(e) {
    this.props.updateSearchTerm(e.target.value);
  }

  render() {
    const { filteredList, searchTerm } = this.props;
    const heroList = filteredList.map((h) => <Character hero={h} key={h.id} />);

    if (this.props.loading) {
      return <LargeSpinner />;
    } else {
      return (
        <div className={styles.characters}>
          <Grid fluid>
            <Row>
              <Col xs={0} sm={1} md={2} />
              <Col xs={12} sm={10} md={8} >
                <InputGroup
                  large
                  leftIcon="search"
                  placeholder="Character Name..."
                  type="text"
                  onChange={this.handleSearchTerm.bind(this)}
                  value={searchTerm}
                  className={styles.searchBox}
                />
              </Col>
              <Col xs={0} sm={1} md={2} />
            </Row>
            <Row>
              {heroList}
            </Row>
          </Grid>
        </div>
      );
    }
  }
}

CharacterList.propTypes = {
  filteredList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getCharacters: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { characters } = state;
  const { filteredList, loading, searchTerm } = characters;

  return {
    filteredList,
    loading,
    searchTerm
  };
}

export default connect(mapStateToProps, {getCharacters, updateSearchTerm})(CharacterList);
